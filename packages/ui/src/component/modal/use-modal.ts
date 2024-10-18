import type { ComponentProps, ComponentType } from 'react';
import { useSyncExternalStore } from 'react';

import { overlayState } from '../../service';

const INVALID_COMPONENT_MSG =
	'🚫 전달되는 모달 컴포넌트는 common-react에서 제공되는 ModalProps interface의 확장이여야 합니다.';

type ReactComponent = ComponentType<any>;
type ResolveArguments = any[];
type ResolveAction = 'onResolve';
type RejectAction = 'onReject';
type ModalDefaultPropsKey = ResolveAction | RejectAction;

/**
 * props가 모두 옵셔널한지
 */

type IsOptional<T, K extends keyof T> = { [U in K]?: T[U] } extends Pick<T, K>
	? true
	: false;

type IsAllOptional<T> = Exclude<
	{
		[K in keyof T]: IsOptional<T, K>;
	}[keyof T],
	undefined
> extends true
	? true
	: false;

/**
 * @description
 * 객체 형식의 value를 전달받는 key에 대해, 해당 객체 value의 모든 값이 옵셔녈 하다면, key 자체를 옵셔널 하게 변경
 *
 * @example
 * props: {id?: number} --> props?: {id?: number}
 * props: {id?: number, name: string} --> props: {id?: number, name: string}
 * props: {id?: number, name?: string} --> props?: {id?: number, name?: string}
 */
type AddPartialUtil<T, K extends keyof T> = IsAllOptional<T[K]> extends true
	? Partial<T>
	: T;

interface ModalDefaultProps {
	onResolve: (...args: ResolveArguments) => void;
	onReject: () => void;
}

/**
 * @description
 * ModalProps 인터페이스를 확장하지 않은 컴포넌트는 타입에러 및 중단되도록 함
 */
type ComponentPropsGuard<T extends ReactComponent> =
	ComponentProps<T> extends Omit<ModalDefaultProps, RejectAction>
		? T
		: { TypeError: typeof INVALID_COMPONENT_MSG };

/**
 * @description
 * 전달된 컴포넌트에서 ModalProps의 기본 props를 제외한 다른 props가 있다면 해당 props가 필수적으로 전달되도록 함
 * props의 모든 값이 옵셔널하다면, props 자체도 옵셔널하게 변경
 */
type ModalComponentArgs<ModalComponent extends ReactComponent> = keyof Omit<
	ComponentProps<ModalComponent>,
	ModalDefaultPropsKey
> extends never
	? {
			component: ComponentPropsGuard<ModalComponent>;
	  }
	: {
			component: ComponentPropsGuard<ModalComponent>;
	  } & AddPartialUtil<
			{
				props: Omit<ComponentProps<ModalComponent>, ModalDefaultPropsKey>;
			},
			'props'
	  >;

/**
 * @description
 * 모달 스코프 내에서만 유효한 contextProvider 할당 children을 제외한 다른 props가 있다면 해당 props가 필수적으로 전달되도록 함
 * contextProviderProps의 모든 값이 옵셔널하다면, contextProviderProps 자체도 옵셔널하게 변경
 */
type ContextProviderArgs<ContextProvider extends ReactComponent | undefined> =
	ContextProvider extends ReactComponent
		? keyof Omit<ComponentProps<ContextProvider>, 'children'> extends never
			? {
					contextProvider: ContextProvider;
			  }
			: {
					contextProvider: ContextProvider;
			  } & AddPartialUtil<
					{
						contextProviderProps: Omit<
							ComponentProps<ContextProvider>,
							'children'
						>;
					},
					'contextProviderProps'
			  >
		: {
				contextProvider?: ContextProvider;
		  };

type CombinedConditionalArgs<
	T extends ReactComponent,
	U extends ReactComponent | undefined
> = ModalComponentArgs<T> & ContextProviderArgs<U>;

type CreateReturnValue<ModalComponent extends ReactComponent> = Parameters<
	ComponentProps<ModalComponent>[ResolveAction]
>[0];

interface ModalStore {
	readonly isOpen: boolean;
	readonly component?: ReactComponent;
	readonly props?: ComponentProps<ReactComponent>;
	readonly contextProvider?: ReactComponent;
	readonly contextProviderProps?: ComponentProps<ReactComponent>;
	readonly onResolve?: (...args: ResolveArguments) => void;
	readonly onReject?: () => void;
}

type ResolveReturn<T extends ReactComponent> =
	| {
			result: true;
			value: CreateReturnValue<T>;
	  }
	| { result: false };

const INITIAL_MODAL_STATE: ModalStore = {
	isOpen: false
};

export interface ModalProps<T = undefined> {
	onResolve: T extends undefined ? () => void : (value: T) => void;
	onReject: () => void;
}

const modalStore = (function () {
	const listeners = new Set<() => void>();
	let modalState: ModalStore = { ...INITIAL_MODAL_STATE };

	const onSubscribe = (cb: () => void) => {
		listeners.add(cb);
		return () => listeners.delete(cb);
	};

	const onChangeModalState = (newState: Partial<ModalStore>) => {
		modalState = { ...modalState, ...newState };

		// 상태 변경 시, 구독된 함수를 호출하여 다시 상태를 반환하도록 함
		listeners.forEach((cb) => cb());
	};

	const onClearModalState = () => {
		modalState = { ...INITIAL_MODAL_STATE };

		// 상태 변경 시, 구독된 함수를 호출하여 다시 상태를 반환하도록 함
		listeners.forEach((cb) => cb());
	};

	const onOpenModal: <
		ModalComponent extends ReactComponent,
		ContextProvider extends ReactComponent | undefined,
		ReturnValue = CreateReturnValue<ModalComponent>
	>(
		args: CombinedConditionalArgs<ModalComponent, ContextProvider>
	) => Promise<{ result: true; value: ReturnValue } | { result: false }> = (
		args
	) => {
		/**
		 * @description
		 * @see {@link ComponentPropsGuard}
		 */
		if ('TypeError' in args.component) {
			throw new Error(args.component.TypeError);
		}

		overlayState.addActiveOverlayCount();

		const Component: ComponentType<ModalDefaultProps> = args.component;
		const props = 'props' in args ? args.props : undefined;

		let resolver:
			| ((value: ResolveReturn<typeof Component>) => void)
			| undefined = undefined;
		const promise = new Promise<ResolveReturn<typeof Component>>((resolve) => {
			resolver = resolve;
		});

		onChangeModalState({
			...modalState,
			isOpen: true,
			component: Component,
			props,
			onResolve: (...[value]: [CreateReturnValue<typeof Component>]) => {
				resolver?.({ result: true, value });
			},
			onReject: () => {
				resolver?.({ result: false });
			}
		});

		return promise;
	};

	const onCloseModal = () => {
		overlayState.minusActiveOverlayCount();

		modalState.onReject?.();

		onClearModalState();
	};

	const getState = () => modalState;

	return { onSubscribe, getState, onOpenModal, onCloseModal };
})();

export const useModal = () => {
	const state = useSyncExternalStore(
		// store update 후, state를 다시 반환을 호출해줄 수 있는 구독 함수 설정
		modalStore.onSubscribe,
		// 상태가 변경되어 구독 함수 호출 시, 변경된 상태를 반환하기 위한 함수
		modalStore.getState,
		modalStore.getState
	);

	return {
		...state,
		onOpenModal: modalStore.onOpenModal,
		onCloseModal: modalStore.onCloseModal
	};
};

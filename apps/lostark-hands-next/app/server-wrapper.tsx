import type { ComponentType } from 'react';
import { type ReactElement, Suspense } from 'react';

interface IServerWrapperProps<T> {
	apiPromise: Promise<T>;
	fallback?: ReactElement;
}

type TConditional<T, U> =
	| {
			render: ComponentType<{ data: U }>;
			selector: (props: T) => U;
	  }
	| {
			render: ComponentType<{ data: Awaited<T> }>;
			selector?: undefined;
	  };

/**
 * streaming 혹은, ppr 지원 시 Suspense로 감싸야 할 경우 사용될 서버 컴포넌트
 * @param apiPromise Promise<dataType>
 * @param fallback Suspense fallback
 * @param render RenderComponent<{data: dataType | selectorReturnType}>
 * @param selector dataSelector
 */
const ServerWrapper = async <T, U>({
	apiPromise,
	fallback,
	render: Component,
	selector
}: IServerWrapperProps<T> & TConditional<T, U>) => {
	const InnerComponent = async () => {
		const data = await apiPromise;

		return (
			<>
				{!selector && <Component data={data} />}
				{selector && <Component data={selector(data)} />}
			</>
		);
	};

	return (
		<Suspense fallback={fallback}>
			<InnerComponent />
		</Suspense>
	);
};

export default ServerWrapper;

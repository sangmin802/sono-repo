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
 * @description
 * 여러개의 api가 호출될 수 있는 경우가 있어 그에 대한 고려가 필요해보임
 * 무한대의 제너릭타입이 고려되어야 전달되는 api 갯수만큼 타입추론이 될 것 같은데 좀.. 불가능해보임
 * 이거 그냥 안쓰는 방법도 고려하는게 최선같아보임
 */

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

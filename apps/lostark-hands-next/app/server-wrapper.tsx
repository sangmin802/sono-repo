/* eslint-disable max-len */

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
 * build, cache 관련
 * {@link https://nextjs.org/docs/app/building-your-application/caching}
 *   --> 캐시도 단계가 있어보임. 경로 페이지에 대한 캐싱, , 데이터에 대한 캐싱 세분화
 *      - api 요청에 대한 캐싱: 동일 경로에 대한 api 요청은 중복되어있다면 한번만 요청하도록 함
 *   --> 그런데.. 이런 api 경로에 대한 캐싱같은것들 axios같은 서브파티를 쓰면 page에 segment 쓰는 방식으로밖에 방법이 없어보이는데 동일하게 적용 되는걸까..?
 *
 * fetch 관련 / 위처럼 page segment로 캐시, 혹은 재검증 값을 부여하거나 fetch를 쓰거나.. 인데, fetch가 뭔가 더 각 캐시 방식별로 디테일하게 잡아줄 수 있어보임
 * {@link https://nextjs.org/docs/app/api-reference/functions/fetch}
 *
 * cache time 5min isr 주기적으로 재빌드. 재검증되는 페이지들은 정적페이지로 간주되는듯
 *   --> {@link https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default}
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate}
 * {@link https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering}
 * 위 링크의 테이블을 보면 이해 좀 됨. 동적기능의 여부 + 데이터캐시 여부 = 해당 경로를 정적으로 생성할지 동적으로 생성할지
 * force-cache 유사 ssg
 * no-store 유사 ssr
 *
 * STREAMING RENDER
 */

export const revalidate = 300;

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

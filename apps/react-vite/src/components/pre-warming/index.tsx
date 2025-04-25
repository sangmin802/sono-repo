import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import SuspenseQueryChild from './suspense-query-child';

const ErrorFallback = () => {
	console.log('ErrorFallback render');
	return <div>Error...</div>;
};

const SuspenseFallback = () => {
	console.log('SuspenseFallback render');
	return <div>Loading...</div>;
};

/**
 * ^18 기준
 * 		- child1 호출(중단) -> child2 호출(중단) -> fallback ..
 * 		- 모든 자식들이 호출된 뒤에아 중단 fallback이 렌더링됨 (바로가 아니라 늦어짐)
 * 19 프로젝트 초기
 * 		- child1 호출(중단) -> fallback-> child1 성공 -> child2 호출(중단) -> fallback
 * 		- 자식들 중 첫 중단 시 바로 fallback 렌더링됨
 * 		- 다만, 첫 중단이 완료된 다음 child2를 호출하고 다시 fallback이라 waterfall이 미쳤음
 * ^19 최신 기준
 * 		- child1 호출(중단) -> fallback-> child2 호출(중단) -> ...
 * 		- 자식들 중 첫 중단 시 바로 fallback 렌더링됨
 */
const PreWarming = () => {
	return (
		<ErrorBoundary fallback={<ErrorFallback />}>
			<Suspense fallback={<SuspenseFallback />}>
				{/* <SuspenseQueryChild index={1} />
				<SuspenseQueryChild index={2} />
				<SuspenseQueryChild index={3} /> */}
			</Suspense>
		</ErrorBoundary>
	);
};

export default PreWarming;

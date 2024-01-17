/* eslint-disable max-len */

import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import ProcyonCompassSection from '@/app/@component/procyon-compass-section';

/**
 * cache time 5min isr 주기적으로 재빌드
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate}
 * {@link https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering}
 * 위 링크의 테이블을 보면 이해 좀 됨. 동적기능의 여부 + 데이터캐시 여부 = 해당 경로를 정적으로 생성할지 동적으로 생성할지
 * force-cache 유사 ssg
 * no-store 유사 ssr
 */
export const revalidate = 300;

const ProcyonCompassSectionList = async () => {
	const { procyon } = calendarSelector(await getCalendarApi());

	return (
		<div className="grid gap-[16px] md:grid-cols-3">
			{Object.values(procyon).map((item) => (
				<ProcyonCompassSection
					key={item.title}
					{...item}
				/>
			))}
		</div>
	);
};

export default ProcyonCompassSectionList;

/* eslint-disable max-len */
import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';
import { getEventApi, getNoticeApi } from '@/service/news';

import DailyContentSectionList from '@/client-component/pages/home/daily-content-section-list';
import Event from '@/client-component/pages/home/event';
import Notice from '@/client-component/pages/home/notice';
import NotificationButton from '@/client-component/pages/home/notification-button';
import ProcyonCompassSectionList from '@/client-component/pages/home/procyon-compass-section-list';

/**
 * cache time 5min isr 주기적으로 재빌드
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate}
 * {@link https://nextjs.org/docs/app/building-your-application/rendering/server-components#switching-to-dynamic-rendering}
 * 위 링크의 테이블을 보면 이해 좀 됨. 동적기능의 여부 + 데이터캐시 여부 = 해당 경로를 정적으로 생성할지 동적으로 생성할지
 * force-cache 유사 ssg
 * no-store 유사 ssr
 */
export const revalidate = 300;

const Page = async () => {
	const [noticeData, storeData, eventData, calendarData] = await Promise.all([
		getNoticeApi('공지'),
		getNoticeApi('상점'),
		getEventApi(),
		getCalendarApi()
	]);

	const { procyon, daily } = calendarSelector(calendarData);

	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<ProcyonCompassSectionList data={Object.values(procyon)} />
			<Event initData={eventData ?? []} />
			<Notice initData={[...(noticeData ?? []), ...(storeData ?? [])]} />
			<DailyContentSectionList data={Object.values(daily)} />
			<NotificationButton />
		</div>
	);
};

export default Page;

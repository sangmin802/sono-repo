import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';
import { getEventApi, getNoticeApi } from '@/service/news';

import DailyContentSectionList from '@/client-component/pages/home/daily-content-section-list';
import Event from '@/client-component/pages/home/event';
import Notice from '@/client-component/pages/home/notice';
import NotificationButton from '@/client-component/pages/home/notification-button';
import ProcyonCompassSectionList from '@/client-component/pages/home/procyon-compass-section-list';

/**
 * cache time 5min
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate}
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

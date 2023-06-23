import { getCalendarApi } from '@/service/game-contents';
import { calendarListSelector } from '@/service/game-contents/selector';
import { getEventApi, getNoticeApi } from '@/service/news';
import { eventListSelector, noticeListSelector } from '@/service/news/selector';

import Calendar from '@/client-component/pages/home/calendar';
import Event from '@/client-component/pages/home/event';
import Notice from '@/client-component/pages/home/notice';

const Page = async () => {
	const [noticeData, storeData, eventData, calendarData] = await Promise.all([
		getNoticeApi('공지', noticeListSelector),
		getNoticeApi('상점', noticeListSelector),
		getEventApi(eventListSelector),
		getCalendarApi(calendarListSelector)
	]);

	return (
		<div>
			<Notice initData={[...noticeData, ...storeData]} />
			<Event initData={eventData} />
			<Calendar initData={calendarData} />
		</div>
	);
};

export default Page;

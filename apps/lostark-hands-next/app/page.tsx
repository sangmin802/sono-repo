import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';
import { getEventApi, getNoticeApi } from '@/service/news';

import {
	DailyContentSectionList,
	DailyContentSectionListSkeleton
} from '@/app/@component/daily-content-section-list';
import { Event, EventSkeleton } from '@/app/@component/event';
import { Notice, NoticeSkeleton } from '@/app/@component/notice';
import NotificationButton from '@/app/@component/notification-button';
import {
	ProcyonCompassSectionList,
	ProcyonCompassSectionListSkeleton
} from '@/app/@component/procyon-compass-section-list';

import ServerWrapper from './server-wrapper';

const Page = () => {
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<ServerWrapper
				fallback={<ProcyonCompassSectionListSkeleton />}
				apiPromise={getCalendarApi()}
				selector={calendarSelector}
				render={ProcyonCompassSectionList}
			/>
			<ServerWrapper
				fallback={<EventSkeleton />}
				apiPromise={getEventApi()}
				render={Event}
			/>
			<ServerWrapper
				fallback={<NoticeSkeleton />}
				apiPromise={Promise.all([getNoticeApi('공지'), getNoticeApi('상점')])}
				render={Notice}
			/>
			<ServerWrapper
				fallback={<DailyContentSectionListSkeleton />}
				apiPromise={getCalendarApi()}
				selector={calendarSelector}
				render={DailyContentSectionList}
			/>
			<NotificationButton />
		</div>
	);
};

export default Page;

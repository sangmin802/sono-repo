import { Suspense } from 'react';

import DailyContentSectionList from '@/app/@component/daily-content-section-list';
import Event from '@/app/@component/event';
import Notice from '@/app/@component/notice';
import NotificationButton from '@/app/@component/notification-button';
import ProcyonCompassSectionList from '@/app/@component/procyon-compass-section-list';

const Page = () => {
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			{/* <Suspense>
				<ProcyonCompassSectionList />
			</Suspense>
			<Suspense>
				<Event />
			</Suspense>
			<Suspense>
				<Notice />
			</Suspense>
			<Suspense>
				<DailyContentSectionList />
			</Suspense> */}
			<NotificationButton />
		</div>
	);
};

export default Page;

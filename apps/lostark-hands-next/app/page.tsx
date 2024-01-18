import { Suspense } from 'react';

import DailyContentSectionList from '@/app/@component/daily-content-section-list';
import Event from '@/app/@component/event';
import Notice from '@/app/@component/notice';
import NotificationButton from '@/app/@component/notification-button';
import ProcyonCompassSectionList from '@/app/@component/procyon-compass-section-list';
import { Test } from '@/app/@component/test';

const Page = () => {
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			{/* <Suspense
				fallback={
					<div className="h-[100px] w-[100px] animate-pulse bg-pink-600"></div>
				}
			>
				<Test />
			</Suspense> */}
			<Suspense
				fallback={
					<div className="h-[100px] w-[100px] animate-pulse bg-pink-600"></div>
				}
			>
				<ProcyonCompassSectionList />
			</Suspense>
			<Suspense
				fallback={
					<div className="h-[100px] w-[100px] animate-pulse bg-pink-600"></div>
				}
			>
				<Event />
			</Suspense>
			<Suspense
				fallback={
					<div className="h-[100px] w-[100px] animate-pulse bg-yellow-600"></div>
				}
			>
				<Notice />
			</Suspense>
			<Suspense
				fallback={
					<div className="h-[100px] w-[100px] animate-pulse bg-pink-600"></div>
				}
			>
				<DailyContentSectionList />
			</Suspense>
			<NotificationButton />
		</div>
	);
};

export default Page;

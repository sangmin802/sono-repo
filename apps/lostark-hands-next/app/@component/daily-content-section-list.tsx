import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import DailyContentSection from '@/app/@component/daily-content-section';
import { LabelLayoutSkeleton } from '@/client-component/label-layout';

export const revalidate = 300;

export const DailyContentSectionList = async () => {
	const { daily } = calendarSelector(await getCalendarApi());

	return (
		<div className="space-y-[16px]">
			{Object.values(daily).map((item) => (
				<DailyContentSection
					key={item.title}
					{...item}
				/>
			))}
		</div>
	);
};

export const DailyContentSectionListSkeleton = () => (
	<div className="space-y-[16px]">
		{Array.from({ length: 3 }).map((_, idx) => (
			<LabelLayoutSkeleton key={idx}>
				<div className="grid grid-cols-2 gap-[8px] md:grid-cols-4 lg:grid-cols-7">
					{Array.from({ length: Math.ceil(Math.random() * 9 + 3) }).map(
						(_, idx) => (
							<div
								key={idx}
								className="h-[98px] animate-pulse rounded-[4px] bg-main-40"
							/>
						)
					)}
				</div>
			</LabelLayoutSkeleton>
		))}
	</div>
);

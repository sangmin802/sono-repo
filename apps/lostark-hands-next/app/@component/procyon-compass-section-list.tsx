import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import ProcyonCompassSection from '@/app/@component/procyon-compass-section';
import { LabelLayoutSkeleton } from '@/client-component/label-layout';

export const revalidate = 300;

export const ProcyonCompassSectionList = async () => {
	const { procyon } = calendarSelector(await getCalendarApi());

	return (
		<section className="grid gap-[16px] md:grid-cols-3">
			{Object.values(procyon).map((item) => (
				<ProcyonCompassSection
					key={item.title}
					{...item}
				/>
			))}
		</section>
	);
};

export const ProcyonCompassSectionListSkeleton = () => (
	<section className="!mt-0 grid gap-[16px] md:grid-cols-3">
		{Array.from({ length: 3 }).map((_, idx) => (
			<LabelLayoutSkeleton
				key={idx}
				className="h-[177px]"
				afterLabel
			>
				<div className="space-y-[4px] pb-[12px]">
					{Array.from({ length: Math.ceil(Math.random() * 4 + 1) }).map(
						(_, idx) => (
							<div
								key={idx}
								style={{ width: Math.random() * 100 + 40 }}
								className="h-[18px] animate-pulse rounded-[2px] bg-main-30"
							/>
						)
					)}
				</div>
			</LabelLayoutSkeleton>
		))}
	</section>
);

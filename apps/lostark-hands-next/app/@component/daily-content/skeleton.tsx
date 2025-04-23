'use client';

import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';

const DailyContentSkeleton = () => (
	<div className="flex flex-col gap-y-[16px]">
		{Array.from({ length: 3 }).map((_, idx) => (
			<LabelLayoutSkeleton key={idx}>
				<div className="grid grid-cols-2 gap-[8px] md:grid-cols-4 lg:grid-cols-7">
					{Array.from({ length: Math.ceil(Math.random() * 9 + 3) }).map(
						(_, idx) => (
							<div
								key={idx}
								className="bg-main-30 h-[98px] animate-pulse rounded-[4px]"
							/>
						)
					)}
				</div>
			</LabelLayoutSkeleton>
		))}
	</div>
);

export default DailyContentSkeleton;

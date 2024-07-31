'use client';

import { LabelLayoutSkeleton } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';

const EngravesSkeleton = () => (
	<LabelLayoutSkeleton as="aside">
		<div className="space-y-[6px]">
			{Array.from({ length: Math.random() * 5 + 1 }).map((_, idx) => (
				<div
					key={idx}
					className="flex items-center"
				>
					<Skeleton
						className="h-[36px] w-[36px]"
						type="LIGHT"
					/>
					<Skeleton
						className="ml-[8px] h-[21px]"
						type="LIGHT"
						randomWidth={{ max: 110, min: 66 }}
					/>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default EngravesSkeleton;

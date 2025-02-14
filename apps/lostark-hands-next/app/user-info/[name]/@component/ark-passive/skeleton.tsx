'use client';

import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import Skeleton from '@/client-component/skeleton';

const ArkPassiveSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="grid grid-cols-1 gap-[12px] pt-0 lg:grid-cols-3">
			{Array.from({ length: 3 }).map((_, idx) => (
				<div key={`group-${idx}`}>
					<Skeleton
						type="LIGHT"
						className="h-[21px] w-[60px]"
					/>
					<div className="my-[12px] space-y-[8px]">
						{Array.from({ length: 6 }).map((item, idx) => (
							<div
								key={`grid-${idx}`}
								className="flex cursor-pointer items-center space-x-[8px]"
							>
								<Skeleton
									type="LIGHT"
									className="size-[30px] overflow-hidden rounded-[6px]"
								/>
								<Skeleton
									type="LIGHT"
									className="h-[17px]"
									randomWidth={{ min: 40, max: 100 }}
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default ArkPassiveSkeleton;

import cn from 'classnames';

import { LabelLayoutSkeleton } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';

const SilblingsSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="space-y-[24px]">
			{Array.from({ length: Math.random() * 4 + 1 }).map((_, idx) => (
				<div
					className="rounded-[6px] bg-main-10 p-[8px]"
					key={idx}
				>
					<Skeleton className="mb-[12px] h-[29px] w-[48px]" />
					<div className="mb-[-12px] flex flex-wrap">
						{Array.from({ length: Math.random() * 8 + 2 }).map((_, idx) => (
							<div
								className={cn(
									'mr-[6px] flex w-[142px] cursor-pointer items-center space-x-[8px] pb-[12px]',
									'md:mr-[16px] md:w-[160px]'
								)}
								key={idx}
							>
								<Skeleton className="h-[36px] w-[36px] rounded-full" />
								<div className="min-w-0 space-y-[1px]">
									<Skeleton
										className="h-[18px]"
										randomWidth={{ max: 70, min: 36 }}
									/>
									<Skeleton
										className="h-[20px]"
										randomWidth={{ max: 70, min: 36 }}
									/>
									<Skeleton
										className="h-[20px]"
										randomWidth={{ max: 70, min: 36 }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default SilblingsSkeleton;

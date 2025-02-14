import { LabelLayoutSkeleton } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';

const GemSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="flex flex-wrap space-x-[16px]">
			{Array.from({ length: Math.random() * 2 + 1 }).map((_, idx) => (
				<div
					className="flex items-center space-x-[8px]"
					key={idx}
				>
					<Skeleton
						className="h-[40px] w-[40px]"
						type="LIGHT"
					/>
					<div>
						<Skeleton
							className="h-[21px] w-[38px]"
							type="LIGHT"
						/>
						<Skeleton
							className="mt-[1px] h-[18px] w-[38px]"
							type="LIGHT"
						/>
					</div>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default GemSkeleton;

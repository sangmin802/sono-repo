import { LabelLayoutSkeleton } from '@/client-component/label-layout';
import { ThumbnailCardSkeleton } from '@/client-component/thumbnail-card';

const AvatarGridSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="space-y-[8px]">
			{Array.from({ length: 7 }).map((_, idx) => (
				<div
					className="grid grid-cols-2 gap-[4px]"
					key={idx}
				>
					{Array.from({ length: Math.round(Math.random() * 1) + 1 }).map(
						(_, idx) => (
							<ThumbnailCardSkeleton
								key={idx}
								className="h-[40px] w-[40px]"
							/>
						)
					)}
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default AvatarGridSkeleton;

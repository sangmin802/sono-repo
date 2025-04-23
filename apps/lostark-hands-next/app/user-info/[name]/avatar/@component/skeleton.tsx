import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import ThumbnailCardSkeleton from '@/client-component/thumbnail-card/skeleton';

const AvatarGridSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="flex flex-col gap-y-[8px]">
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

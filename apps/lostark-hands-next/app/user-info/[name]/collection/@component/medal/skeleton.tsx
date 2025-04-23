import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import ThumbnailCardSkeleton from '@/client-component/thumbnail-card/skeleton';

const CollectionMedalSkeleton = () => (
	<LabelLayoutSkeleton className="my-[16px] lg:my-0">
		<div className="flex flex-col gap-y-[8px]">
			{Array.from({ length: 2 }).map((_, idx) => (
				<ThumbnailCardSkeleton
					className="h-[40px] w-[40px]"
					key={idx}
				/>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default CollectionMedalSkeleton;

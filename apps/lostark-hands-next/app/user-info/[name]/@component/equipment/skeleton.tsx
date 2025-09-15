import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import ThumbnailCardSkeleton from '@/client-component/thumbnail-card/skeleton';

const EquipmentSkeleton = () => (
	<>
		<LabelLayoutSkeleton
			className="!mt-0"
			as="section"
		>
			<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
				{Array.from({ length: 6 }).map((_, idx) => (
					<div
						className="flex gap-x-[6px]"
						key={idx}
					>
						<ThumbnailCardSkeleton className="h-[40px] w-[40px]" />
					</div>
				))}
			</div>
		</LabelLayoutSkeleton>
		<LabelLayoutSkeleton as="section">
			<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
				<div className="flex flex-col gap-y-[8px]">
					{Array.from({ length: 5 }).map((_, idx) => (
						<ThumbnailCardSkeleton
							className="h-[40px] w-[40px]"
							key={idx}
						/>
					))}
				</div>
				<div className="flex flex-col gap-y-[8px]">
					{Array.from({ length: 2 }).map((_, idx) => (
						<ThumbnailCardSkeleton
							className="h-[40px] w-[40px]"
							key={idx}
						/>
					))}
				</div>
			</div>
		</LabelLayoutSkeleton>
	</>
);

export default EquipmentSkeleton;

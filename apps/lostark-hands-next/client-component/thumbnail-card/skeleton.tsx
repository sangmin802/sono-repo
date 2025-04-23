import Skeleton from '../skeleton';

const ThumbnailCardSkeleton = ({ className }: { className?: string }) => (
	<div className="flex gap-x-[6px]">
		<Skeleton
			className={className}
			type="LIGHT"
		/>
		<div className="flex min-w-0 grow flex-col justify-center gap-y-[1px]">
			<Skeleton
				className="h-[18px]"
				randomWidth={{ max: 120, min: 60 }}
				type="LIGHT"
			/>
			<Skeleton
				className="h-[21px]"
				randomWidth={{ max: 120, min: 60 }}
				type="LIGHT"
			/>
		</div>
	</div>
);

export default ThumbnailCardSkeleton;

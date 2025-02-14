import cn from 'classnames';

const ThumbnailPostSkeleton = ({
	className,
	imgClassName
}: {
	className?: string;
	imgClassName?: string;
}) => (
	<div className={className}>
		<div
			className={cn('animate-pulse rounded-[2px] bg-main-30', imgClassName)}
		/>
		<div className="mt-[12px] space-y-[4px]">
			<div
				style={{ width: Math.random() * 80 + 40 }}
				className="h-[16px] animate-pulse rounded-[2px] bg-main-30"
			/>
			<div
				style={{ width: Math.random() * 80 + 40 }}
				className="h-[16px] animate-pulse rounded-[2px] bg-main-30"
			/>
		</div>
	</div>
);

export default ThumbnailPostSkeleton;

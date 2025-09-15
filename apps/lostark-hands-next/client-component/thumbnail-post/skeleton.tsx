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
			className={cn('bg-main-30 animate-pulse rounded-[2px]', imgClassName)}
		/>
		<div className="mt-[12px] flex flex-col gap-y-[4px]">
			<div
				style={{ width: Math.random() * 80 + 40 }}
				className="bg-main-30 h-[16px] animate-pulse rounded-[2px]"
			/>
			<div
				style={{ width: Math.random() * 80 + 40 }}
				className="bg-main-30 h-[16px] animate-pulse rounded-[2px]"
			/>
		</div>
	</div>
);

export default ThumbnailPostSkeleton;

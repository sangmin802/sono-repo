import cn from 'classnames';

const MessagePostSkeleton = ({ className }: { className?: string }) => (
	<div className={cn('flex items-center', className)}>
		<span className="mr-[8px]">📌</span>
		<span
			style={{ width: `${Math.random() * 60 + 30}%` }}
			className="h-[21px] animate-pulse rounded-[2px] bg-main-30"
		/>
	</div>
);

export default MessagePostSkeleton;

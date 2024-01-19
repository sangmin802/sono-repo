'use client';

import cn from 'classnames';

interface IMessagePostProps {
	className?: string;
	title: string;
	link: string;
}

export const MessagePost = ({ className, title, link }: IMessagePostProps) => {
	const handleClickPost = () => {
		window.open(link);
	};

	return (
		<div className={cn('flex items-center', className)}>
			<span className="mr-[8px] text-[8px]">📌</span>
			<span
				className="cursor-pointer truncate text-gray-300 hover:font-bold hover:text-white"
				onClick={handleClickPost}
			>
				{title}
			</span>
		</div>
	);
};

export const MessagePostSkeleton = ({ className }: { className?: string }) => (
	<div className={cn('flex items-center', className)}>
		<span className="mr-[8px]">📌</span>
		<span
			style={{ width: `${Math.random() * 60 + 30}%` }}
			className="h-[21px] animate-pulse rounded-[2px] bg-main-30"
		/>
	</div>
);

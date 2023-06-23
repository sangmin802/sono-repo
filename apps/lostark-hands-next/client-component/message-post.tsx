'use client';

import cn from 'classnames';

interface IMessagePostProps {
	className?: string;
	title: string;
	url: string;
}

const MessagePost = ({ className, title, url }: IMessagePostProps) => {
	const handleClickPost = () => {
		window.open(url);
	};

	return (
		<div className={cn('flex items-center', className)}>
			<span className="mr-[4px] text-[8px]">📌</span>
			<span
				className="cursor-pointer truncate text-gray-300 hover:text-white"
				onClick={handleClickPost}
			>
				{title}
			</span>
		</div>
	);
};

export default MessagePost;

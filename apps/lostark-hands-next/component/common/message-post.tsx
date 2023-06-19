'use client';

import type { FC } from 'react';
import cn from 'classnames';

interface IMessagePostProps {
	className?: string;
	title: string;
	url: string;
}

const MessagePost: FC<IMessagePostProps> = ({ className, title, url }) => {
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

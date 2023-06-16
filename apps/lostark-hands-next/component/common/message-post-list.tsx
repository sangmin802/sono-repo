'use client';
import type { FC } from 'react';

interface IMessagePostListProps {
	list: { title: string; date: string; link: string; type: string }[];
}

const MessagePostList: FC<IMessagePostListProps> = ({ list }) => {
	const handleClickPost = (url: string) => () => {
		window.open(url);
	};

	return (
		<div className="space-y-[4px]">
			{list.map(({ title, link }, idx) => (
				<div
					className="flex items-center"
					key={idx}
				>
					<span className="mr-[4px] text-[8px]">📌</span>
					<span
						className="grow cursor-pointer truncate text-gray-300 hover:text-white"
						onClick={handleClickPost(link)}
					>
						{title}
					</span>
				</div>
			))}
		</div>
	);
};

export default MessagePostList;

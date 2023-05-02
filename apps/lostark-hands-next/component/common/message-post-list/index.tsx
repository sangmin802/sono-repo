import { FC } from 'react';

interface IMessagePostListProps {
	list: { title: string; date: string; link: string; type: string }[];
}

const MessagePostList: FC<IMessagePostListProps> = ({ list }) => {
	return (
		<div>
			{list.map(({ title }, idx) => (
				<div key={idx}>{title}</div>
			))}
		</div>
	);
};

export default MessagePostList;

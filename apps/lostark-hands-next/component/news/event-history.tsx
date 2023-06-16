import type { FC } from 'react';

import { getNoticeApi } from '@/service/news';

import MessagePostList from '@/component/common/message-post-list';

/* @ts-expect-error Async Server Component */
const UpdateHistory: FC = async () => {
	const list = await getNoticeApi();

	const updateList = list
		.filter(({ Title }) => Title.includes('업데이트 내역 안내'))
		.map(({ Date, Link, Title }) => ({
			title: Title,
			type: '업데이트',
			date: Date,
			link: Link
		}))
		.splice(0, 10);

	return <MessagePostList list={updateList} />;
};

export default UpdateHistory;

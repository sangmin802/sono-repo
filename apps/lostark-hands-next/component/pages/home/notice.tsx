import { type FC } from 'react';

import { getNoticeApi } from '@/service/news';

import MessagePost from '@/component/common/message-post';
import SectionLayout from '@/component/common/section-layout';

const Notice: FC = async () => {
	const [anounceData, storeDate] = await Promise.all(
		['공지', '상점'].map((type) => getNoticeApi(type))
	);

	const list = Array.from(
		[...anounceData, ...storeDate].reduce(
			(prev, { Title, Date, Link, Type }) => {
				const noticeType = Title.includes('업데이트') ? '업데이트' : Type;

				prev.set(noticeType, [
					...(prev.get(noticeType) ?? []),
					{
						title: Title,
						type: noticeType,
						date: Date,
						url: Link
					}
				]);

				return prev;
			},
			new Map<
				string,
				{ title: string; type: string; date: string; url: string }[]
			>()
		)
	);

	return (
		<div className="flex">
			{list.map(([key, postList]) => (
				<SectionLayout
					key={key}
					className="min-w-0 grow basis-0"
					title={key}
				>
					<div className="space-y-[4px]">
						{postList.slice(0, 10).map((item, idx) => (
							<MessagePost
								key={idx}
								{...item}
							/>
						))}
					</div>
				</SectionLayout>
			))}
		</div>
	);
};

export default Notice;

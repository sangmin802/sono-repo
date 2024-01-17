import { getNoticeApi } from '@/service/news';
import type { INotice } from '@/service/news/types';

import LabelLayout from '@/client-component/label-layout';
import MessagePost from '@/client-component/message-post';

export const revalidate = 300;

const Notice = async () => {
	const [noticeData, storeData] = await Promise.all([
		getNoticeApi('공지'),
		getNoticeApi('상점')
	]);

	const noticeList = Array.from(
		[...(noticeData ?? []), ...(storeData ?? [])].reduce((prev, cur) => {
			const noticeType = cur.title.includes('업데이트') ? '업데이트' : cur.type;

			prev.set(noticeType, [...(prev.get(noticeType) ?? []), cur]);

			return prev;
		}, new Map<string, INotice[]>())
	);

	return (
		<div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
			{noticeList.map(([key, postList]) => (
				<LabelLayout
					key={key}
					className="min-w-0 grow basis-0"
					label={key}
				>
					<div className="space-y-[4px]">
						{postList.slice(0, 10).map((item, idx) => (
							<MessagePost
								key={idx}
								{...item}
							/>
						))}
					</div>
				</LabelLayout>
			))}
		</div>
	);
};

export default Notice;

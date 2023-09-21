'use client';

import { useMemo } from 'react';

import type { INotice } from '@/service/news/types';

import MessagePost from '@/client-component/message-post';
import SectionLayout from '@/client-component/section-layout';

interface INoticeProps {
	initData: INotice[];
}

const Notice = ({ initData }: INoticeProps) => {
	const noticeList = useMemo(
		() =>
			Array.from(
				initData.reduce((prev, cur) => {
					const noticeType = cur.title.includes('업데이트')
						? '업데이트'
						: cur.type;

					prev.set(noticeType, [...(prev.get(noticeType) ?? []), cur]);

					return prev;
				}, new Map<string, (typeof initData)[0][]>())
			),
		[initData]
	);

	return (
		<div className="grid grid-cols-1 gap-[16px] py-[20px] sm:grid-cols-3">
			{noticeList.map(([key, postList]) => (
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

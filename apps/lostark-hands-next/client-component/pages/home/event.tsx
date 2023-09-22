'use client';

import type { IEvent } from '@/service/news/types';

import SectionLayout from '@/client-component/section-layout';
import ThumbnailPost from '@/client-component/thumbnail-post';

interface IEventProps {
	initData: IEvent[];
}

const Event = ({ initData }: IEventProps) => {
	return (
		<SectionLayout
			className="py-[20px]"
			title="이벤트"
		>
			<div className="grid grid-cols-2 gap-[12px] lg:grid-cols-3">
				{initData.map((item, idx) => (
					<ThumbnailPost
						key={idx}
						date={`${item.startDate.split('T')[0]} ~ ${
							item.endDate.split('T')[0]
						}`}
						{...item}
					/>
				))}
			</div>
		</SectionLayout>
	);
};

export default Event;

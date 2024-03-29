'use client';

import type { IEvent } from '@/service/news/types';

import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import {
	ThumbnailPost,
	ThumbnailPostSkeleton
} from '@/client-component/thumbnail-post';

interface IEventProps {
	data: IEvent[] | null;
}

export const Event = ({ data }: IEventProps) => {
	return (
		<LabelLayout
			as="section"
			label="이벤트"
		>
			<div className="hide-scrollbar mx-[-8px] flex flex-nowrap space-x-[16px] overflow-x-scroll px-[8px]">
				{data?.map((item, idx) => (
					<ThumbnailPost
						className="w-[140px]"
						key={idx}
						date={item.endDate.split('T')[0]}
						{...item}
					/>
				))}
			</div>
		</LabelLayout>
	);
};

export const EventSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="hide-scrollbar mx-[-8px] flex flex-nowrap space-x-[16px] overflow-x-scroll px-[8px]">
			{Array.from({ length: Math.ceil(Math.random() * 4 + 2) }).map(
				(_, idx) => (
					<ThumbnailPostSkeleton
						imgClassName="w-[140px] h-[67px]"
						key={idx}
					/>
				)
			)}
		</div>
	</LabelLayoutSkeleton>
);

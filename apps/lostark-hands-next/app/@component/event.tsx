'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
			<Swiper
				slidesPerView="auto"
				spaceBetween={16}
				loop
				autoplay={{
					delay: 3000
				}}
				speed={500}
				modules={[Autoplay]}
			>
				{data?.map((item, idx) => (
					<SwiperSlide
						key={idx}
						className="!w-[140px]"
					>
						<ThumbnailPost
							date={item.endDate.split('T')[0]}
							{...item}
						/>
					</SwiperSlide>
				))}
			</Swiper>
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

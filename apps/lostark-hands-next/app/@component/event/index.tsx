'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { IEvent } from '@/service/news/types';

import LabelLayout from '@/client-component/label-layout';
import ThumbnailPost from '@/client-component/thumbnail-post';

interface IEventProps {
	data: IEvent[] | null;
}

const Event = ({ data }: IEventProps) => {
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

export default Event;

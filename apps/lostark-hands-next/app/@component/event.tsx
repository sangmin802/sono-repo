import axios from 'axios';

import { getEventApi } from '@/service/news';

import { pascalToCamelInArray } from '@/util/selector';

import LabelLayout from '@/client-component/label-layout';
import ThumbnailPost from '@/client-component/thumbnail-post';

import { API_KEY, API_URL } from '@/constant';

const Event = async () => {
	const data: any[] = await fetch(`${API_URL}/news/events`, {
		// cache: 'no-store',
		headers: {
			accept: 'application/json',
			authorization: `bearer ${API_KEY}`
		},
		next: {
			revalidate: 300
		}
	}).then((res) => res.json());

	return (
		<LabelLayout
			className="py-[20px]"
			label="이벤트"
		>
			<div className="hide-scrollbar mx-[-8px] flex flex-nowrap space-x-[16px] overflow-x-scroll px-[8px]">
				{pascalToCamelInArray(data)?.map((item, idx) => (
					<ThumbnailPost
						className="min-w-[140px]"
						key={idx}
						date={item.endDate.split('T')[0]}
						{...item}
					/>
				))}
			</div>
		</LabelLayout>
	);
};

export default Event;

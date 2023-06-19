import { type FC } from 'react';

import { getEventApi } from '@/service/news';

import SectionLayout from '@/component/common/section-layout';
import ThumbnailPost from '@/component/common/thumbnail-post';

const Event: FC = async () => {
	const data = await getEventApi();
	const eventList = data.map(
		({ Title, Thumbnail, Link, StartDate, EndDate }) => ({
			title: Title,
			thumbnail: Thumbnail,
			url: Link,
			date: `${StartDate.split('T')[0]} ~ ${EndDate.split('T')[0]}`
		})
	);

	return (
		<SectionLayout title="이벤트">
			<div className="grid grid-cols-3 gap-[12px]">
				{eventList.map((item, idx) => (
					<ThumbnailPost
						key={idx}
						{...item}
					/>
				))}
			</div>
		</SectionLayout>
	);
};

export default Event;

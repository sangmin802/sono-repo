import { getEventApi } from '@/service/news';

import LabelLayout from '@/client-component/label-layout';
import ThumbnailPost from '@/client-component/thumbnail-post';

export const revalidate = 300;

const Event = async () => {
	const data = await getEventApi();

	return (
		<LabelLayout
			className="py-[20px]"
			label="이벤트"
		>
			<div className="hide-scrollbar mx-[-8px] flex flex-nowrap space-x-[16px] overflow-x-scroll px-[8px]">
				{data?.map((item, idx) => (
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

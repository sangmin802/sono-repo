import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import DailyContentSection from '@/app/@component/daily-content-section';

import { API_KEY, API_URL } from '@/constant';

const DailyContentSectionList = async () => {
	const res: any[] = await fetch(`${API_URL}/news/events`, {
		// cache: 'no-store',
		headers: {
			accept: 'application/json',
			authorization: `bearer ${API_KEY}`
		},
		next: {
			revalidate: 300
		}
	}).then((res) => res.json());
	const { daily } = calendarSelector(res);

	return (
		<div className="space-y-[16px]">
			{Object.values(daily).map((item) => (
				<DailyContentSection
					key={item.title}
					{...item}
				/>
			))}
		</div>
	);
};

export default DailyContentSectionList;

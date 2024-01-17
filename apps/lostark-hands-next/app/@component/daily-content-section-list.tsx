import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import DailyContentSection from '@/app/@component/daily-content-section';

export const revalidate = 300;

const DailyContentSectionList = async () => {
	const { daily } = calendarSelector(await getCalendarApi());

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

import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import ProcyonCompassSection from '@/app/@component/procyon-compass-section';

import { API_KEY, API_URL } from '@/constant';

const ProcyonCompassSectionList = async () => {
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
	const { procyon } = calendarSelector(res);

	return (
		<div className="grid gap-[16px] md:grid-cols-3">
			{Object.values(procyon).map((item) => (
				<ProcyonCompassSection
					key={item.title}
					{...item}
				/>
			))}
		</div>
	);
};

export default ProcyonCompassSectionList;

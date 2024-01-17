import { getCalendarApi } from '@/service/game-contents';
import { calendarSelector } from '@/service/game-contents/selector';

import ProcyonCompassSection from '@/app/@component/procyon-compass-section';

export const revalidate = 300;

const ProcyonCompassSectionList = async () => {
	const { procyon } = calendarSelector(await getCalendarApi());

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

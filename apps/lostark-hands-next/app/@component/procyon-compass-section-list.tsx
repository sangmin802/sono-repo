'use client';

import type { ICalendar } from '@/service/game-contents/types';

import { convertCalendarData } from '@/util/calendar';

import ProcyonCompassSection from '@/app/@component/procyon-compass-section';

interface IDailyContentSectionListProps {
	data: { title: string; list: ICalendar[] }[];
}

const ProcyonCompassSectionList = ({ data }: IDailyContentSectionListProps) => {
	return (
		<div className="grid gap-[16px] md:grid-cols-3">
			{data.map(({ title, list }) => (
				<ProcyonCompassSection
					key={title}
					title={title}
					list={convertCalendarData(list)}
				/>
			))}
		</div>
	);
};

export default ProcyonCompassSectionList;

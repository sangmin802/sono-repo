'use client';

import type { ICalendar } from '@/service/game-contents/types';

import { convertCalendarData } from '@/util/calendar';

import DailyContentSection from '@/client-component/pages/home/daily-content-section';

interface IDailyContentSectionListProps {
	data: { title: string; list: ICalendar[] }[];
}

const DailyContentSectionList = ({ data }: IDailyContentSectionListProps) => {
	return (
		<div className="space-y-[16px]">
			{data.map(({ title, list }) => (
				<DailyContentSection
					key={title}
					title={title}
					list={convertCalendarData(list)}
				/>
			))}
		</div>
	);
};

export default DailyContentSectionList;

'use client';

import CalendarSection from '@/client-component/pages/home/calendar-section';
import type {
	TCalendarItem,
	TInitData
} from '@/client-component/pages/home/types';

interface ICalendarProps {
	initData: TInitData;
}

const Calendar = async ({ initData }: ICalendarProps) => {
	const calendarGroupList = Array.from(
		initData.reduce((prev, cur) => {
			prev.set(cur.type, [
				...(prev.get(cur.type) ?? []),
				{
					...cur
				}
			]);

			return prev;
		}, new Map<string, TCalendarItem[]>())
	);

	return (
		<>
			{calendarGroupList.map(([title, contentList]) => (
				<CalendarSection
					key={title}
					title={title}
					list={contentList}
				/>
			))}
		</>
	);
};

export default Calendar;

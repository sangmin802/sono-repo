'use client';

import { calendarListSelector } from '@/service/game-contents/selector';
import type { ICalendar } from '@/service/game-contents/type';

import CalendarSection from '@/client-component/pages/home/calendar-section';
import type { TCalendarItem } from '@/client-component/pages/home/types';

interface ICalendarProps {
	initData: ICalendar[] | null;
}

const Calendar = ({ initData }: ICalendarProps) => {
	const calendarGroupList = Array.from(
		calendarListSelector(initData ?? []).reduce((prev, cur) => {
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

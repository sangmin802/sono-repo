import type { calendarSelector } from '@/service/game-contents/selector';
import type { ICalendar } from '@/service/game-contents/types';

import type { convertCalendarData } from '@/util/calendar';

export type TCalendarItem = ReturnType<typeof convertCalendarData>[0];

export type TCalendarData = ReturnType<typeof calendarSelector>;

export interface ICalenderContetProps {
	title: string;
	list: ICalendar[];
}

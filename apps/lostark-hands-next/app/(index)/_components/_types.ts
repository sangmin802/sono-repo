import type { ICalendar } from '@/service/game-contents/_types';
import type { calendarSelector } from '@/service/game-contents/selector';

import type { convertCalendarData } from './_utils';

export type TCalendarItem = ReturnType<typeof convertCalendarData>[0];

export type TCalendarData = ReturnType<typeof calendarSelector>;

export interface ICalenderContetProps {
	title: string;
	list: ICalendar[];
}

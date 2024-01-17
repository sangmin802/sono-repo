import type { ICalendar } from '@/service/game-contents/types';

import type { convertCalendarData } from '@/util/calendar';

export type TCalendarItem = ReturnType<typeof convertCalendarData>[0];

export interface ICalenderContetProps {
	title: string;
	list: ICalendar[];
}

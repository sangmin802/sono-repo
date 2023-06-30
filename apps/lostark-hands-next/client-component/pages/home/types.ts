import { type calendarListSelector } from '@/service/game-contents/selector';

export type TInitData = ReturnType<typeof calendarListSelector>;

export type TCalendarItem = TInitData[0] & {
	type: string;
};

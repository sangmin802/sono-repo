import { DateTime, type DurationUnits } from 'luxon';

import { addZero } from './number';

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;

export const getDateDiff = (
	baseDate: Date,
	compareDate: Date,
	unit: DurationUnits
) => DateTime.fromJSDate(baseDate).diff(DateTime.fromJSDate(compareDate), unit);

export const getTimeUnit = (date: Date, unit: keyof DateTime) =>
	DateTime.fromJSDate(date).get(unit);

export const getTime = (time: number) => {
	const hour = Math.floor(time / HOUR);
	const min = Math.floor((time % HOUR) / MIN);
	const sec = Math.floor((time % MIN) / SEC);

	return `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
};

export const convertDateFormat = (date: Date | string, format = 'HH:mm') => {
	if (!date) return;

	const convertedDate = typeof date !== 'string' ? date.toISOString() : date;

	return DateTime.fromISO(convertedDate).setLocale('ko').toFormat(format);
};

import { DateTime, type DurationUnits } from 'luxon';

export const getDateDiff = (
	baseDate: Date,
	compareDate: Date,
	unit: DurationUnits
) => DateTime.fromJSDate(baseDate).diff(DateTime.fromJSDate(compareDate), unit);

export const getTimeUnit = (date: Date, unit: keyof DateTime) =>
	DateTime.fromJSDate(date).get(unit);

export const convertDateFormat = (date: Date | string, format = 'HH:mm') => {
	if (!date) return;

	const convertedDate = typeof date !== 'string' ? date.toISOString() : date;

	return DateTime.fromISO(convertedDate).setLocale('ko').toFormat(format);
};

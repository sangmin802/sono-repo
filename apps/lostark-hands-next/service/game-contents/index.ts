import axiosInstance from '@/service/axios';
import { type ICalendar } from '@/service/game-contents/_types';

import { pascalToCamelInArray } from '@/utils';

import type { ToPascalKey } from '@/types';

/**
 * @description get calendar list
 */
export const getCalendarApi = async (): Promise<ICalendar[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<ICalendar>[] | null>('/gamecontents/calendar')
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamelInArray(data) : data
			}))
	).data;

import axiosInstance from '@/service/axios';
import { type ICalendar } from '@/service/game-contents/types';

import { pascalToCamelInArray } from '@/util/selector';

import type { ToPascalKey } from '@/type';

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

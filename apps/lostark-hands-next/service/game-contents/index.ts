import axiosInstance from '@/service/axios';
import { type ICalendar } from '@/service/game-contents/type';

import { pascalToCamelInArray } from '@/util/selector';

import type { ToPascalKey } from '@/type';

/**
 * @description get calendar list
 */
export const getCalendarApi = async (): Promise<ICalendar[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<ICalendar>[] | null>('/gamecontents/calendar')
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data)
			}))
	).data;

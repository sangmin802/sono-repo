import axiosInstance from '@/service/axios';
import { type ICalendar } from '@/service/game-contents/type';

/**
 * @description get calendar list
 */
export const getCalendarApi = async <ReturnType>(
	selector?: (data: ICalendar[]) => ReturnType
): Promise<typeof selector extends undefined ? ICalendar[] : ReturnType> =>
	(
		await axiosInstance.get('/gamecontents/calendar').then((resolve) => ({
			...resolve,
			data: selector ? selector(resolve.data) : resolve.data
		}))
	).data;

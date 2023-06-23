import axiosInstance from '@/service/axios';
import type { IEvent, INotice } from '@/service/news/types';

/**
 * @description get notice list on type
 * @param type notice type
 */
export const getNoticeApi = async <ReturnType>(
	type: string,
	selector?: (data: INotice[]) => ReturnType
): Promise<typeof selector extends undefined ? INotice[] : ReturnType> =>
	(
		await axiosInstance
			.get('/news/notices', {
				params: {
					type
				}
			})
			.then((resolve) => ({
				...resolve,
				data: selector ? selector(resolve.data) : resolve.data
			}))
	).data;

/**
 * @description get event list
 */
export const getEventApi = async <ReturnType>(
	selector?: (data: IEvent[]) => ReturnType
): Promise<typeof selector extends undefined ? IEvent[] : ReturnType> =>
	(
		await axiosInstance.get('/news/events').then((resolve) => ({
			...resolve,
			data: selector ? selector(resolve.data) : resolve.data
		}))
	).data;

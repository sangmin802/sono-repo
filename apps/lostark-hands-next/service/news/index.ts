import axiosInstance from '@/service/axios';
import type { IEvent, INotice } from '@/service/news/types';

import { pascalToCamelInArray } from '@/util/selector';

import type { ToPascalKey } from '@/type';

/**
 * @description get notice list on type
 * @param type notice type
 */
export const getNoticeApi = async (type: string): Promise<INotice[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<INotice>[] | null>('/news/notices', {
				params: {
					type
				}
			})
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data)
			}))
	).data;

/**
 * @description get event list
 */
export const getEventApi = async (): Promise<IEvent[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IEvent>[] | null>('/news/events')
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data)
			}))
	).data;

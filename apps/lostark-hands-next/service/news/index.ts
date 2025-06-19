import axiosInstance from '@/service/axios';
import type { IEvent, INotice } from '@/service/news/_types';

import { pascalToCamelInArray } from '@/utils';

import type { ToPascalKey } from '@/types';

/**
 * @description get notice list on type
 * @param type notice type
 */
export const getNoticeApi = async (type?: string): Promise<INotice[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<INotice>[] | null>('/news/notices', {
				params: {
					type
				}
			})
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamelInArray(data) : data
			}))
	).data;

/**
 * @description get event list
 */
export const getEventApi = async (): Promise<IEvent[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IEvent>[] | null>('/news/events')
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamelInArray(data) : data
			}))
	).data;

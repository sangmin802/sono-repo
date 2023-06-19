import axiosInstance from '@/service/axios';
import type { IEvent, INotice } from '@/service/news/types';

export const getNoticeApi = async (type: string): Promise<INotice[]> =>
	(
		await axiosInstance.get('/news/notices', {
			params: {
				type
			}
		})
	).data;

export const getEventApi = async (): Promise<IEvent[]> =>
	(await axiosInstance.get('/news/events')).data;

import axiosInstance from '@/service/axios';
import type { IEvent, INotice } from '@/service/news/types';

export const getNoticeApi = async (): Promise<INotice[]> =>
	(await axiosInstance.get('/news/noticesss?type=공지')).data;

export const getEventApi = async (): Promise<IEvent[]> =>
	(await axiosInstance.get('/news/events')).data;

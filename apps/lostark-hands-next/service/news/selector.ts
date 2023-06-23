import { type IEvent, type INotice } from '@/service/news/types';

/**
 * @description convert eventList to client form
 */
export const eventListSelector = (list: IEvent[]) =>
	list.map(({ Title, Thumbnail, Link, StartDate, EndDate }) => ({
		title: Title,
		thumbnail: Thumbnail,
		url: Link,
		date: `${StartDate.split('T')[0]} ~ ${EndDate.split('T')[0]}`
	}));

/**
 * @description convert noticeList to client form
 */
export const noticeListSelector = (list: INotice[]) =>
	list.map(({ Title, Date, Link, Type }) => ({
		title: Title,
		type: Type,
		date: Date,
		url: Link
	}));

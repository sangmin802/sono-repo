import type { INotice } from '@/service/news/types';

export const getNoticeApi = async (): Promise<INotice[]> => {
	try {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/news/notices?type=공지`,
			{
				headers: {
					accept: 'application/json',
					authorization: `bearer ${process.env.NEXT_PUBLIC_API_KEY}`
				}
			}
		);

		return data.json();
	} catch (error) {
		return error;
	}
};

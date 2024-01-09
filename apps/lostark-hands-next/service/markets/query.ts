import type {
	QueryKey,
	UseSuspenseInfiniteQueryOptions
} from '@tanstack/react-query';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getItemListApi } from '@/service/markets';
import { GET_MARKET_LIST_KEY } from '@/service/markets/query-key';
import type {
	IMarketsFilter,
	IResponseItemList
} from '@/service/markets/types';

export const useGetListQuery = (
	params: Omit<IMarketsFilter, 'pageNo'>,
	options?: Omit<
		UseSuspenseInfiniteQueryOptions<
			IResponseItemList,
			Error,
			IResponseItemList,
			IResponseItemList,
			QueryKey,
			IMarketsFilter & { pageNo: number }
		>,
		'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam' | 'select'
	>
) =>
	useSuspenseInfiniteQuery({
		...options,
		queryKey: [GET_MARKET_LIST_KEY, params],
		queryFn: ({ pageParam }) => getItemListApi(pageParam),
		initialPageParam: { ...params, pageNo: 1 },
		getNextPageParam: (lastPage, _, lastParams) => {
			if (!lastPage) return undefined;

			const totalPage = Math.ceil(lastPage.totalCount / lastPage.pageSize);

			if (lastPage?.pageNo === totalPage) return undefined;

			return { ...lastParams, pageNo: lastParams.pageNo + 1 };
		},
		select: ({ pages }) => pages.flatMap((item) => item?.items)
	});

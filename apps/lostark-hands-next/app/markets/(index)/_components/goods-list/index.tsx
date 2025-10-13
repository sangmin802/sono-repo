'use client';

import { useGetListQuery } from '@/service/markets/query';

import InfiniteList from '@/client-component/infinite-list';

import useMarketsFilter from '../../use-markets-filter';
import Card from './card';

const List = () => {
	const { mainCategory, subCategory, ...restFilter } = useMarketsFilter();

	const { data, isFetching, hasNextPage, fetchNextPage } = useGetListQuery({
		...restFilter,
		categoryCode: subCategory ?? mainCategory
	});

	return (
		<InfiniteList
			className="grid gap-[24px] md:grid-cols-2"
			isFetching={isFetching}
			isHasNextPage={hasNextPage}
			onFetch={fetchNextPage}
		>
			{data.map((item, idx) => (
				<Card
					key={`${item.id}_${idx}`}
					{...item}
				/>
			))}
		</InfiniteList>
	);
};

export default List;

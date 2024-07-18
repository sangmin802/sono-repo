'use client';

import { useGetListQuery } from '@/service/markets/query';

import InfiniteList from '@/client-component/infinite-list';

import { Card, CardSkeleton } from './card';

interface IListProps {
	filter: {
		categoryCode: number;
		characterClass?: string;
		itemTier?: number;
		itemGrade?: string;
		itemName?: string;
		sort?: string;
		sortCondition?: string;
	};
}

export const List = ({ filter }: IListProps) => {
	const { data, isFetching, hasNextPage, fetchNextPage } =
		useGetListQuery(filter);

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

export const ListSkeleton = () => (
	<div className="grid gap-[24px] md:grid-cols-2">
		{Array.from({ length: 20 }).map((_, idx) => (
			<CardSkeleton key={idx} />
		))}
	</div>
);

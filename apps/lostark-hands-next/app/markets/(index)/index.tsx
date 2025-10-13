'use client';

import { Suspense } from 'react';

import type { IOptions } from '@/service/markets/_types';

import FilterButton from './_components/filter-button';
import List from './_components/goods-list';
import ListSkeleton from './_components/goods-list/skeleton';

interface IMarketsProps {
	data: IOptions;
}

const Markets = ({ data }: IMarketsProps) => {
	return (
		<div>
			<Suspense fallback={<ListSkeleton />}>
				<List />
			</Suspense>
			<FilterButton data={data} />
		</div>
	);
};

export default Markets;

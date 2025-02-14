'use client';

import { Suspense } from 'react';
import cn from 'classnames';

import { Button } from '@sono-repo/ui';

import type { IOptions } from '@/service/markets/types';

import useMarketsFilter from '@/app/markets/@hook/use-markets-filter';
import useClientRendered from '@/hook/use-client-rendered';

import List from './goods-list';
import ListSkeleton from './goods-list/skeleton';

interface IMarketsProps {
	data: IOptions;
}

const Markets = ({ data }: IMarketsProps) => {
	const isClientRendered = useClientRendered();
	const { filter, onOpenFilter } = useMarketsFilter(data);

	return (
		<div>
			{isClientRendered && (
				<Suspense fallback={<ListSkeleton />}>
					<List filter={filter} />
				</Suspense>
			)}
			<Button
				className={cn(
					'fixed bottom-[4%] right-[6%] flex items-center justify-center rounded-[4px] px-[6px] py-[4px]',
					'bg-gray-800/[.6] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]'
				)}
				onClick={onOpenFilter}
			>
				+필터
			</Button>
		</div>
	);
};

export default Markets;

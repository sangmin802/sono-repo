'use client';

import { Suspense } from 'react';
import cn from 'classnames';

import { Button } from '@sono-repo/ui';

import type { IOptions } from '@/service/markets/types';

import useClientRendered from '@/hook/use-client-rendered';

import useMarketsFilter from '@/client-component/pages/markets/hook/use-markets-filter';
import List from '@/client-component/pages/markets/list';

interface IMarketsProps {
	options: IOptions;
}

const Markets = ({ options }: IMarketsProps) => {
	const isClientRendered = useClientRendered();
	const { filter, onOpenFilter } = useMarketsFilter(options);

	return (
		<div>
			{isClientRendered && (
				<Suspense fallback={null}>
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

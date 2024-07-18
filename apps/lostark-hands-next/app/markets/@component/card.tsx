'use client';
import cn from 'classnames';

import type { IItem } from '@/service/markets/types';

import Label from '@/client-component/label';
import RewardIcon from '@/client-component/reward-icon';
import Skeleton from '@/client-component/skeleton';
import Thumbnail from '@/client-component/thumbnail';

import { GOLD_ICON_URL } from '@/constant';

const PriceLabel = ({ label, price }: { label: string; price: number }) => {
	return (
		<div className="flex items-center">
			<Label className="mr-[4px] w-[68px] shrink-0 text-[12px]">{label}</Label>
			<div className="flex shrink-0 grow justify-end text-[12px]">
				{price.toLocaleString()}
				<RewardIcon
					name="골드"
					path={GOLD_ICON_URL}
				/>
			</div>
		</div>
	);
};

export const Card = (item: IItem) => (
	<div
		className={cn(
			'flex items-center justify-between space-x-[4px] p-[6px] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
			'duration-75 ease-in-out hover:scale-[1.01]'
		)}
	>
		<div className="flex shrink-0 grow basis-0 items-center space-x-[8px]">
			<Thumbnail
				className="h-[40px] w-[40px]"
				grade={item.grade}
				src={item.icon}
				alt={item.name}
			/>
			<div>
				<div>{item.name}</div>
				{item.bundleCount > 1 && <div>{item.bundleCount}개 단위 판매</div>}
				{typeof item.tradeRemainCount === 'number' && (
					<div className="text-[10px] text-gray-500">
						구매 시 거래{' '}
						<span className="text-[10px] font-bold">
							{item.tradeRemainCount}
						</span>
						회 가능
					</div>
				)}
			</div>
		</div>
		<div className="shrink-0 grow basis-0 space-y-[4px]">
			<PriceLabel
				label="최저가"
				price={item.currentMinPrice}
			/>
			<PriceLabel
				label="평균 거래가"
				price={item.yDayAvgPrice}
			/>
			<PriceLabel
				label="최근 구매가"
				price={item.recentPrice}
			/>
		</div>
	</div>
);

export const CardSkeleton = () => (
	<div
		className={cn(
			'flex items-center justify-between space-x-[4px] p-[6px] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
			'duration-75 ease-in-out hover:scale-[1.01]'
		)}
	>
		<div className="flex shrink-0 grow basis-0 items-center space-x-[8px]">
			<div className="h-[40px] w-[40px] rounded-[4px] bg-main-20" />
			<div className="grow space-y-[1px]">
				<Skeleton
					className="h-[20px]"
					randomWidth={{ unit: '%', min: 20, max: 80 }}
				/>
				<Skeleton
					className="h-[20px]"
					randomWidth={{ unit: '%', min: 20, max: 80 }}
				/>
				<Skeleton
					className="h-[14px]"
					randomWidth={{ unit: '%', min: 20, max: 80 }}
				/>
			</div>
		</div>
		<div className="shrink-0 grow basis-0 space-y-[4px]">
			<Skeleton className="h-[26px]" />
			<Skeleton className="h-[26px]" />
			<Skeleton className="h-[26px]" />
		</div>
	</div>
);

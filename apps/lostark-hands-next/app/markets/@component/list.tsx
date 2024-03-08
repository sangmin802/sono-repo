'use client';

import { useEffect, useState } from 'react';
import cn from 'classnames';

import { useGetListQuery } from '@/service/markets/query';

import Label from '@/client-component/label';
import RewardIcon from '@/client-component/reward-icon';
import Thumbnail from '@/client-component/thumbnail';

import { GOLD_ICON_URL } from '@/constant';

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

const List = ({ filter }: IListProps) => {
	const { data, fetchNextPage } = useGetListQuery(filter);
	/**
	 * 상품 갯수가 10개씩 내려와 임의의 최하단 div 요소에 ref 할당방식은 div 요소가 항상 보여서 불가능
	 */
	const [ioEl, setIoEl] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		const ref = ioEl;

		if (!ref) return;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				fetchNextPage();
			}
		});

		observer.observe(ref);

		return () => {
			observer.unobserve(ref);
		};
	}, [ioEl, fetchNextPage]);

	return (
		<div className="grid gap-[24px] md:grid-cols-2">
			{data.map((item, idx) => (
				<div
					key={`${item.id}_${idx}`}
					className={cn(
						'flex items-center justify-between space-x-[4px] p-[6px] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
						'duration-75 ease-in-out hover:scale-[1.01]'
					)}
					ref={idx === data.length - 1 ? setIoEl : undefined}
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
							{item.bundleCount > 1 && (
								<div>{item.bundleCount}개 단위 판매</div>
							)}
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
			))}
		</div>
	);
};

export default List;

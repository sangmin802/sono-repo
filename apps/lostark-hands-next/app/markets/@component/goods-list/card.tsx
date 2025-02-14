import cn from 'classnames';

import type { IItem } from '@/service/markets/types';

import Thumbnail from '@/client-component/thumbnail';

import PriceLabel from './price-label';

const Card = (item: IItem) => (
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

export default Card;

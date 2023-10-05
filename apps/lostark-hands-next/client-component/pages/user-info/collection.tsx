'use client';

import { useState } from 'react';
import cn from 'classnames';

import type { ICollectible, TCollectibleType } from '@/service/armories/types';

import useResponsive from '@/hook/use-responsive';

import LabelLayout from '@/client-component/pages/user-info/label-layout';
import ShadowStickyElement from '@/client-component/sticky-element';

import { COLLECTION_DESC } from '@/constant/collection';

interface ICollectionProps {
	data: ICollectible[];
}

const bgPosition: Record<
	TCollectibleType,
	{ backgroundPositionX: number; backgroundPositionY: number }
> = {
	'거인의 심장': { backgroundPositionX: -205, backgroundPositionY: -173 },
	'섬의 마음': { backgroundPositionX: -235, backgroundPositionY: -24 },
	'모코코 씨앗': { backgroundPositionX: -234, backgroundPositionY: -92 },
	'위대한 미술품': { backgroundPositionX: -181, backgroundPositionY: -172 },
	'항해 모험물': { backgroundPositionX: -234, backgroundPositionY: -115 },
	'세계수의 잎': { backgroundPositionX: -234, backgroundPositionY: -48 },
	'이그네아의 징표': { backgroundPositionX: -234, backgroundPositionY: 0 },
	'오르페우스의 별': { backgroundPositionX: -234, backgroundPositionY: -70 },
	'기억의 오르골': { backgroundPositionX: 2, backgroundPositionY: -216 }
};

const Collection = ({ data }: ICollectionProps) => {
	const { isLg } = useResponsive();

	const [selectCollect, setSelectCollect] = useState(data[0]);

	return (
		<div className="w-full lg:flex">
			<ShadowStickyElement
				className={cn(
					'flex flex-nowrap',
					'z-[90] mx-[-16px] mb-[8px] self-start px-[16px] pb-[8px]',
					'hide-scrollbar w-screen overflow-x-scroll',
					'lg:m-0 lg:mr-[30px] lg:w-fit lg:flex-col lg:overflow-x-visible lg:bg-transparent lg:px-0 lg:pb-0'
				)}
				activeClassName={cn({ 'shadow-[0px_10px_10px_rgba(0,0,0,.3)]': !isLg })}
				as="nav"
				top={68}
			>
				{data.map((item) => (
					<div
						className={cn(
							'flex w-[130px] shrink-0 items-center',
							'cursor-pointer space-x-[8px] rounded-[4px] p-[4px] duration-500',
							{
								'bg-main-30': item.type === selectCollect.type,
								'hover:bg-main-20': item.type !== selectCollect.type
							}
						)}
						key={item.type}
						onClick={() => {
							setSelectCollect(item);
						}}
					>
						<div
							className="h-[22px] w-[22px] bg-collection"
							style={{ ...bgPosition[item.type] }}
						/>
						<div>
							<div>
								<div
									className={cn({
										'text-white': item.type === selectCollect.type,
										'text-main-40': item.type !== selectCollect.type
									})}
								>
									{item.type}
								</div>
							</div>
							<div className="text-gray-400">
								{item.point}/{item.maxPoint}
							</div>
						</div>
					</div>
				))}
			</ShadowStickyElement>
			<LabelLayout
				className="grow"
				label={selectCollect.type}
			>
				<div className="space-y-[4px]">
					{selectCollect.collectiblePoints.map(
						({ pointName, point, maxPoint }) => (
							<div
								className="grid grid-cols-[1fr_2fr] gap-[16px]"
								key={pointName}
							>
								<div
									className={cn({
										'text-main-40': point !== maxPoint
									})}
								>
									{pointName}
								</div>
								<div className="text-gray-400">
									{selectCollect.type === '모코코 씨앗' &&
										`${point}/${maxPoint}`}
									{selectCollect.type !== '모코코 씨앗' &&
										COLLECTION_DESC[selectCollect.type][pointName]}
								</div>
							</div>
						)
					)}
				</div>
			</LabelLayout>
		</div>
	);
};

export default Collection;

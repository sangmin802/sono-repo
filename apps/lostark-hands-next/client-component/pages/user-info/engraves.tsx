'use client';

import cn from 'classnames';
import Image from 'next/image';

import type { IEffect } from '@/service/armories/types';

import ENGRAVE_IMGAE from '@/constant/engrave';

import type { ToCamelKey } from '@/type';

interface IEngravesProps {
	data: ToCamelKey<IEffect[]>;
}

const engravePointColor: Record<number, string> = {
	0: 'text-white',
	3: 'text-advanced',
	6: 'text-rare',
	9: 'text-epic',
	12: 'text-legendary'
};

const Engraves = ({ data }: IEngravesProps) => {
	return (
		<div className="space-y-[6px] rounded-[6px] bg-main-20 p-[8px]">
			{data.map(({ name, point }) => (
				<div
					key={name}
					className="flex items-center"
				>
					<div className="relative">
						<Image
							className="rounded-[6px]"
							src={`https://cdn-lostark.game.onstove.com/EFUI_IconAtlas/${
								ENGRAVE_IMGAE[name.split(' Lv')[0]]
							}`}
							width={36}
							height={36}
							alt="name"
						/>
					</div>
					<div className="ml-[8px]">
						{!!point && (
							<div className="text-[12px] leading-[12px] text-gray-400">
								+{point} 각인서
							</div>
						)}
						<div className={engravePointColor[Number(point) ?? 0]}>{name}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Engraves;

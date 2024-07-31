'use client';

import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { IEffect } from '@/service/armories/types';

import { CDN_URL } from '@/constant';
import ENGRAVE_IMGAE from '@/constant/engrave';

interface ICommonEngraveProps {
	data: IEffect[] | null;
}

const ENGRAVE_POINT_COLOR: Record<number, string> = {
	0: 'text-white',
	3: 'text-advanced',
	6: 'text-rare',
	9: 'text-epic',
	12: 'text-legendary'
};

const CommonEngrave = ({ data }: ICommonEngraveProps) => {
	return (
		<>
			{data?.map(({ name, point }) => (
				<div
					key={name}
					className="flex items-center"
				>
					<div className="relative">
						<Image
							as={NextImage}
							className="size-[36px] overflow-hidden rounded-[6px]"
							src={`${CDN_URL}/EFUI_IconAtlas/${
								ENGRAVE_IMGAE[name.split(' Lv')[0]]
							}`}
							width={36}
							height={36}
							alt={name}
						/>
					</div>
					<div className="ml-[8px]">
						{!!point && (
							<div className="text-[12px] leading-[12px] text-gray-400">
								+{point} 각인서
							</div>
						)}
						<div className={ENGRAVE_POINT_COLOR[Number(point) ?? 0]}>
							{name}
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default CommonEngrave;

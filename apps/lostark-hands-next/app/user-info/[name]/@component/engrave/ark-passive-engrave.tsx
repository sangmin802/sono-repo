'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { IArkPassiveEffects } from '@/service/armories/types';

import { CDN_URL } from '@/constant';
import ENGRAVE_IMGAE from '@/constant/engrave';

import type { TGrade } from '@/type';

interface IArkPassiveEffectsProps {
	data: IArkPassiveEffects[] | null;
}
const ENGRAVE_POINT_COLOR: Partial<Record<TGrade, string>> = {
	희귀: 'text-rare',
	영웅: 'text-epic',
	전설: 'text-legendary',
	유물: 'text-relic'
};

const ArkPassiveEngrave = ({ data }: IArkPassiveEffectsProps) => {
	return (
		<>
			{data?.map(({ name, grade, level, abilityStoneLevel }) => (
				<div
					key={name}
					className="flex items-center"
				>
					<div className="relative">
						<Image
							as={NextImage}
							className="size-[36px] overflow-hidden rounded-[6px]"
							src={`${CDN_URL}/EFUI_IconAtlas/${ENGRAVE_IMGAE[name]}`}
							width={36}
							height={36}
							alt={name}
						/>
					</div>
					<div className="ml-[8px]">
						<div className="flex items-center space-x-2">
							<div
								className={cn(
									'text-[12px] leading-[12px]',
									ENGRAVE_POINT_COLOR[grade ?? '일반']
								)}
							>
								{grade} +{level}
							</div>
							{abilityStoneLevel && (
								<div className="text-[12px] leading-[12px] text-[#00b5ff]">
									어빌리티 스톤 +{abilityStoneLevel}
								</div>
							)}
						</div>
						<div>{name}</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ArkPassiveEngrave;

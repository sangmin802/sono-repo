'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { IArmoryProfile } from '@/service/armories/_types';

import Label from '@/client-component/label';

import { TEXT_STYLE } from './_constants';
import { LevelInfo } from './level-info';

interface IProfileProps {
	data?: IArmoryProfile | null;
}

const Profile = ({ data }: IProfileProps) => {
	if (!data) throw new Error('no character');

	return (
		<div className="relative h-[240px] overflow-hidden md:h-[360px]">
			<div className="absolute z-[4] flex h-full flex-col justify-center">
				<div className="flex flex-col gap-y-[8px] px-[16px] md:gap-y-[16px]">
					<div className="flex gap-x-[8px]">
						{data.serverName && (
							<Label className={TEXT_STYLE}>{data.serverName}</Label>
						)}
						{data.characterClassName && (
							<Label className={TEXT_STYLE}>{data.characterClassName}</Label>
						)}
					</div>
					<div className="flex items-baseline">
						{data.title && (
							<div className="mr-[4px] text-[12px] text-gray-400">
								{data.title}
							</div>
						)}
						<div className="text-[18px] font-bold md:text-[22px]">
							{data.characterName}
						</div>
					</div>
					<div className="flex flex-col gap-y-[6px]">
						<div className="flex items-center">
							<Label className={TEXT_STYLE}>길드</Label>
							<div className="ml-[4px] text-[12px] md:text-[16px]">
								{data.guildName ?? '-'}
							</div>
						</div>
						<div className="flex items-center">
							<Label className={TEXT_STYLE}>영지</Label>
							<div className="ml-[4px] text-[12px] md:text-[16px]">
								{data.townLevel
									? `Lv${data.townLevel} / ${data.townName}`
									: '-'}
							</div>
						</div>
						<div className="flex items-center">
							<Label className={TEXT_STYLE}>pvp</Label>
							<div className="ml-[4px] text-[12px] md:text-[16px]">
								{data.pvpGradeName ?? '-'}
							</div>
						</div>
					</div>
					<div className="flex gap-x-[10px] [&_div]:font-bold">
						<LevelInfo label="전투">Lv. {data.characterLevel ?? 0}</LevelInfo>
						<LevelInfo label="원정대">
							Lv. {data.expeditionLevel ?? 0}
						</LevelInfo>
						<LevelInfo label="아이템레벨">
							Lv. {data.itemAvgLevel ?? 0}
						</LevelInfo>
						<LevelInfo label="전투력">{data.combatPower ?? 0}</LevelInfo>
					</div>
				</div>
			</div>
			{data.characterImage && (
				<div
					className={cn(
						'absolute right-0 z-[1] w-[240px] md:w-[360px]',
						'bg-main-10 pointer-events-none select-none'
					)}
				>
					<Image
						as={NextImage}
						priority
						width={600}
						height={900}
						src={data.characterImage}
						alt={data.characterName}
					/>
					<div
						className={cn(
							'absolute left-0 top-0 z-[2] h-[300px] w-[10%]',
							'from-main-10 bg-gradient-to-r from-20% to-transparent'
						)}
					/>
				</div>
			)}
			<div
				className={cn(
					'absolute bottom-0 right-0 z-[3] h-[10%] w-[240px] md:right-0 md:w-[360px]',
					'from-main-10 bg-gradient-to-t from-20% to-transparent'
				)}
			/>
		</div>
	);
};

export default Profile;

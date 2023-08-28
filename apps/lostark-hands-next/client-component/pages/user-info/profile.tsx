'use client';

import cn from 'classnames';
import Image from 'next/image';

import type { IArmoryProfile } from '@/service/armories/types';

import Label from '@/client-component/label';

import type { ToCamelKey } from '@/type';

interface IProfileProps {
	data: ToCamelKey<IArmoryProfile>;
}

const Profile = ({ data }: IProfileProps) => {
	const {
		characterImage,
		characterName,
		townLevel,
		townName,
		characterLevel,
		itemMaxLevel,
		characterClassName,
		serverName,
		pvpGradeName,
		guildName,
		expeditionLevel,
		title
	} = data;

	return (
		<div className="relative h-[300px] overflow-hidden">
			<div className="absolute left-0 z-[3] space-y-[16px]">
				<div className="flex space-x-[8px]">
					<Label>{serverName}</Label>
					<Label>{characterClassName}</Label>
				</div>
				<div className="flex items-baseline">
					{title && (
						<div className="mr-[4px] text-[12px] text-gray-400">{title}</div>
					)}
					<div className="text-[22px] font-bold">{characterName}</div>
				</div>
				<div className="space-y-[6px]">
					<div className="flex items-center">
						<Label>길드</Label>
						<div className="ml-[4px] text-[16px]">{guildName ?? '-'}</div>
					</div>
					<div className="flex items-center">
						<Label>영지</Label>
						<div className="ml-[4px] text-[16px]">
							Lv{townLevel} / {townName}
						</div>
					</div>
					<div className="flex items-center">
						<Label>pvp</Label>
						<div className="ml-[4px] text-[16px]">{pvpGradeName}</div>
					</div>
				</div>
				<div className="flex space-x-[20px] [&_div]:text-[18px] [&_div]:font-bold">
					<div>
						<div className="text-gray-400">전투</div>
						<div>Lv. {characterLevel}</div>
					</div>
					<div>
						<div className="text-gray-400">아이템</div>
						<div>Lv. {itemMaxLevel}</div>
					</div>
					<div>
						<div className="text-gray-400">원정대</div>
						<div>{expeditionLevel}</div>
					</div>
				</div>
			</div>
			<Image
				className="pointer-events-none absolute right-0 z-[1] w-[360px] select-none bg-main-10"
				width={600}
				height={900}
				src={characterImage}
				alt={characterName}
			/>
			<div
				className={cn(
					'absolute bottom-0 z-[2] h-[30%] w-full bg-gradient-to-t from-main-10 from-20% to-transparent'
				)}
			/>
		</div>
	);
};

export default Profile;

'use client';

import type { PropsWithChildren } from 'react';
import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { IArmoryProfile } from '@/service/armories/types';

import Label from '@/client-component/label';
import Skeleton from '@/client-component/skeleton';

interface IProfileProps {
	data?: IArmoryProfile | null;
}

const textStyle = 'text-[14px] md:text-[16px]';

const LevelInfo = ({
	label,
	children
}: PropsWithChildren<{ label: string }>) => (
	<div className="space-y-[4px]">
		<div className={cn('text-gray-400', textStyle)}>{label}</div>
		<div className={textStyle}>Lv. {children}</div>
	</div>
);

export const Profile = ({ data }: IProfileProps) => {
	if (!data) throw new Error('no character');

	return (
		<div className="relative h-[240px] overflow-hidden md:h-[360px]">
			<div className="absolute z-[4] flex h-full flex-col justify-center">
				<div className="space-y-[8px] px-[16px] md:space-y-[16px]">
					<div className="flex space-x-[8px]">
						{data.serverName && (
							<Label className={textStyle}>{data.serverName}</Label>
						)}
						{data.characterClassName && (
							<Label className={textStyle}>{data.characterClassName}</Label>
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
					<div className="space-y-[6px]">
						<div className="flex items-center">
							<Label className={textStyle}>길드</Label>
							<div className="ml-[4px] text-[12px] md:text-[16px]">
								{data.guildName ?? '-'}
							</div>
						</div>
						<div className="flex items-center">
							<Label className={textStyle}>영지</Label>
							<div className="ml-[4px] text-[12px] md:text-[16px]">
								{data.townLevel
									? `Lv${data.townLevel} / ${data.townName}`
									: '-'}
							</div>
						</div>
						<div className="flex items-center">
							<Label className={textStyle}>pvp</Label>
							<div className="ml-[4px] text-[12px] md:text-[16px]">
								{data.pvpGradeName ?? '-'}
							</div>
						</div>
					</div>
					<div className="flex space-x-[10px] [&_div]:font-bold">
						<LevelInfo label="전투">{data.characterLevel ?? 0}</LevelInfo>
						<LevelInfo label="아이템">{data.itemMaxLevel ?? '0.00'}</LevelInfo>
						<LevelInfo label="원정대">{data.expeditionLevel ?? 0}</LevelInfo>
					</div>
				</div>
			</div>
			{data.characterImage && (
				<div
					className={cn(
						'absolute right-0 z-[1] w-[240px] md:w-[360px]',
						'pointer-events-none select-none bg-main-10'
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
							'bg-gradient-to-r from-main-10 from-20% to-transparent'
						)}
					/>
				</div>
			)}
			<div
				className={cn(
					'absolute bottom-0 right-0 z-[3] h-[10%] w-[240px] md:right-0 md:w-[360px]',
					'bg-gradient-to-t from-main-10 from-20% to-transparent'
				)}
			/>
		</div>
	);
};

export const ProfileSkeleton = () => (
	<div className="relative h-[240px] w-full md:h-[360px]">
		<div className="absolute z-[4] flex h-full flex-col justify-center">
			<div className="space-y-[16px] px-[16px]">
				<div className="flex space-x-[8px]">
					<Skeleton
						className="h-[29px]"
						randomWidth={{ max: 70, min: 40 }}
					/>
					<Skeleton
						className="h-[29px]"
						randomWidth={{ max: 70, min: 40 }}
					/>
				</div>
				<div className="flex items-baseline space-x-[4px]">
					<Skeleton
						className="h-[18px]"
						randomWidth={{ max: 70, min: 40 }}
					/>
					<Skeleton
						className="h-[33px]"
						randomWidth={{ max: 36, min: 30 }}
					/>
				</div>
				<div className="space-y-[6px]">
					{Array.from({ length: 3 }).map((_, idx) => (
						<div
							key={idx}
							className="flex items-center space-x-[4px]"
						>
							<Skeleton
								className="h-[29px]"
								randomWidth={{ max: 36, min: 30 }}
							/>
							<Skeleton
								className="h-[29px]"
								randomWidth={{ max: 100, min: 70 }}
							/>
						</div>
					))}
				</div>
				<div className="flex space-x-[10px]">
					{Array.from({ length: 3 }).map((_, idx) => (
						<div
							key={idx}
							className="space-y-[4px]"
						>
							<Skeleton className="h-[24px] w-[60px] sm:h-[27px] sm:w-[50px]" />
							<Skeleton className="h-[24px] w-[90px] sm:h-[27px] sm:w-[101px]" />
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default Profile;

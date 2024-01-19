'use client';

import cn from 'classnames';
import Image from 'next/image';

import type { IArmoryProfile } from '@/service/armories/types';

import Label from '@/client-component/label';

interface IProfileProps {
	data?: IArmoryProfile;
}

const Profile = ({ data }: IProfileProps) => {
	return (
		<div className="relative h-[360px] overflow-hidden">
			<div className="absolute z-[4] flex h-full flex-col justify-center">
				<div className="space-y-[16px] px-[16px]">
					<div className="flex space-x-[8px]">
						{data?.serverName && <Label>{data?.serverName}</Label>}
						{data?.characterClassName && (
							<Label>{data?.characterClassName}</Label>
						)}
					</div>
					<div className="flex items-baseline">
						{data?.title && (
							<div className="mr-[4px] text-[12px] text-gray-400">
								{data?.title}
							</div>
						)}
						<div className="text-[22px] font-bold">{data?.characterName}</div>
					</div>
					<div className="space-y-[6px]">
						<div className="flex items-center">
							<Label>길드</Label>
							<div className="ml-[4px] text-[16px]">
								{data?.guildName ?? '-'}
							</div>
						</div>
						<div className="flex items-center">
							<Label>영지</Label>
							<div className="ml-[4px] text-[16px]">
								{data?.townLevel
									? `Lv${data?.townLevel} / ${data?.townName}`
									: '-'}
							</div>
						</div>
						<div className="flex items-center">
							<Label>pvp</Label>
							<div className="ml-[4px] text-[16px]">
								{data?.pvpGradeName ?? '-'}
							</div>
						</div>
					</div>
					<div className="flex space-x-[10px] [&_div]:text-[16px] [&_div]:font-bold [&_div]:sm:text-[18px]">
						<div>
							<div className="text-gray-400">전투</div>
							<div>Lv. {data?.characterLevel ?? 0}</div>
						</div>
						<div>
							<div className="text-gray-400">아이템</div>
							<div>Lv. {data?.itemMaxLevel ?? '0.00'}</div>
						</div>
						<div>
							<div className="text-gray-400">원정대</div>
							<div>Lv. {data?.expeditionLevel ?? 0}</div>
						</div>
					</div>
				</div>
			</div>
			{data?.characterImage && (
				<div
					className={cn(
						'absolute right-[-100px] z-[1] w-[360px] md:right-0',
						'pointer-events-none select-none bg-main-10'
					)}
				>
					<Image
						priority
						width={600}
						height={900}
						src={data?.characterImage}
						alt={data?.characterName}
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
					'absolute bottom-0 right-[-100px] z-[3] h-[10%] w-[360px] md:right-0',
					'bg-gradient-to-t from-main-10 from-20% to-transparent'
				)}
			/>
		</div>
	);
};

export default Profile;

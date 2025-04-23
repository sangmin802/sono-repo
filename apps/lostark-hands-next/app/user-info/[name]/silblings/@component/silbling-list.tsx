'use client';

import cn from 'classnames';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

import { Image } from '@sono-repo/ui';

import type { ICharacterInfo } from '@/service/characters/types';

import { CDN_URL } from '@/constant';

import { CLASS } from '@/type/content';

interface ISilblingListProps {
	list: ICharacterInfo[];
}

const SilblingList = ({ list }: ISilblingListProps) => {
	const router = useRouter();

	const handleMoveUserInfo = (name: string) => {
		router.push(`/user-info/${name}`);
	};

	return (
		<div className="flex flex-wrap">
			{list.map((info) => (
				<div
					className={cn(
						'mr-[6px] flex w-[142px] cursor-pointer items-center gap-x-[8px] pb-[12px]',
						'md:mr-[16px] md:w-[160px]'
					)}
					key={info.characterName}
					onClick={() => handleMoveUserInfo(info.characterName)}
				>
					<Image
						as={NextImage}
						className="size-[36px]"
						width={36}
						height={36}
						src={`${CDN_URL}/2018/obt/assets/images/common/thumb/${
							CLASS[info.characterClassName]
						}.png`}
						alt={info.characterClassName}
						priority
					/>
					<div className="min-w-0">
						<div className="text-[12px] text-gray-400">
							{info.characterClassName}
						</div>
						<div>{info.itemMaxLevel}</div>
						<div className="truncate">
							<span className="mr-[4px] text-[12px] text-gray-400">
								{info.characterLevel}Lv
							</span>
							{info.characterName}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SilblingList;

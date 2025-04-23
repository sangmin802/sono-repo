import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { ICard } from '@/service/armories/types';

import { CDN_URL } from '@/constant';

import type { TGrade } from '@/type';

const cardOutline: Record<TGrade, number> = {
	일반: 0,
	고급: 1,
	희귀: 2,
	영웅: 3,
	전설: 4,
	유물: 5,
	고대: 6,
	에스더: 7
};

const CardItem = (item: ICard) => {
	return (
		<>
			<Image
				className="absolute inset-0"
				src={item.icon}
				alt={item.name}
			/>
			<Image
				className="absolute inset-0 scale-[1.04]"
				src={`${CDN_URL}/2018/obt/assets/images/m/profile/bg_profile_card${
					cardOutline[item.grade]
				}.png`}
				alt={item.grade}
			/>
			<div
				className={cn(
					'absolute bottom-[4px] flex h-[12%] w-full justify-center',
					'gap-x-[4px]'
				)}
			>
				{Array.from({ length: item.awakeTotal }, (_, idx) => idx).map((idx) => (
					<Image
						as={NextImage}
						className="h-full w-[10%]"
						key={idx}
						src={
							idx <= item.awakeCount - 1
								? '/icons/img_profile_awake_fill.png'
								: '/icons/img_profile_awake_empty.png'
						}
						width={16}
						height={28}
						alt="awake"
					/>
				))}
			</div>
		</>
	);
};

export default CardItem;

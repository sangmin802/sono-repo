'use client';

import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import { CDN_URL } from '@/constant';

interface IRewardIconProps {
	name: string;
	path: string;
}

const RewardIcon = ({ name, path }: IRewardIconProps) => {
	return (
		<Image
			as={NextImage}
			className="size-[16px] overflow-hidden rounded-[4px]"
			width={16}
			height={16}
			src={`${CDN_URL}/${path}`}
			alt={name}
		/>
	);
};

export default RewardIcon;

'use client';

import Image from 'next/image';

import { CDN_URL } from '@/constant';

interface IRewardIconProps {
	name: string;
	path: string;
}

const RewardIcon = ({ name, path }: IRewardIconProps) => {
	return (
		<Image
			className="h-[16px] w-[16px] rounded-[4px]"
			width={16}
			height={16}
			src={`${CDN_URL}/${path}`}
			alt={name}
		/>
	);
};

export default RewardIcon;

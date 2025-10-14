'use client';

import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import { CDN_URL } from '@/constants';

interface CDNIconProps {
	name: string;
	path: string;
}

const CDNIcon = ({ name, path }: CDNIconProps) => {
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

export default CDNIcon;

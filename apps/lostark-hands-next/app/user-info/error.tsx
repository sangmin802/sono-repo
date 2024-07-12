'use client';

import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

const Error = () => {
	return (
		<div className="pt-[20vh] text-center">
			<Image
				className="mb-[32px] inline-block size-[160px]"
				src="/icons/emoticon_8.png"
				alt="모코코만큼 화난다"
				width={160}
				height={160}
				as={NextImage}
			/>
			<div>존재하지 않는 사용자 입니다.</div>
		</div>
	);
};

export default Error;

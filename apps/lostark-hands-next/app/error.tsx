'use client';

import NextImage from 'next/image';

import { Button, Image } from '@sono-repo/ui';

interface IErrorProps {
	reset: () => void;
}

const Error = ({ reset }: IErrorProps) => {
	return (
		<div className="pt-[20vh] text-center">
			<Image
				className="mb-[32px] inline-block size-[160px]"
				src="/icons/emoticon_4.png"
				alt="모코코만큼 화난다"
				width={160}
				height={160}
				as={NextImage}
			/>
			<div>로스트아크 서비스 점검 중 입니다.</div>
			<div>점검 종료 후 재시도해주세요.</div>
			<Button
				className="bg-main-40 mx-auto mt-[20px] rounded-[4px] px-[6px] py-[4px]"
				onClick={reset}
			>
				재시도
			</Button>
		</div>
	);
};

export default Error;

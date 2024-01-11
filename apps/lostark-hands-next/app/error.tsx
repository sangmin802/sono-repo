'use client';

import Image from 'next/image';

import { Button } from '@sono-repo/ui';

interface IErrorProps {
	reset: () => void;
}

const Error = ({ reset }: IErrorProps) => {
	return (
		<div className="pt-[20vh] text-center">
			<Image
				className="mb-[32px] inline-block"
				src="/icons/emoticon_4.png"
				alt="모코코만큼 화난다"
				width={160}
				height={160}
			/>
			<div>로스트아크 서비스 점검 중 입니다.</div>
			<div>점검 종료 후 재시도해주세요.</div>
			<Button
				className="mx-auto mt-[20px] rounded-[4px] bg-main-40 px-[6px] py-[4px]"
				onClick={reset}
			>
				재시도
			</Button>
		</div>
	);
};

export default Error;

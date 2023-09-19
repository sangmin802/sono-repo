'use client';

import type { ReactElement } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Chip } from '@sono-repo/ui';

import { GRADE_BG_COLOR } from '@/constant';

import type { TGrade } from '@/type';

interface IArmoryCard {
	grade: TGrade;
	image: string;
	armoryType: string;
	children: ReactElement;
	onClick: () => void;
}

const ArmoryCard = ({
	grade,
	image,
	armoryType,
	children,
	onClick
}: Partial<IArmoryCard>) => {
	return (
		<div
			className="flex cursor-pointer space-x-[6px]"
			onClick={onClick}
		>
			<div
				className={cn(
					'relative h-[60px] w-[60px] shrink-0 rounded-[4px] border border-white',
					grade ? GRADE_BG_COLOR[grade] : 'bg-main-10'
				)}
			>
				{armoryType && (
					<Chip
						className="absolute bottom-[1px] right-[1px] max-w-[48px] truncate"
						type="transparent"
					>
						{armoryType}
					</Chip>
				)}
				{image && (
					<Image
						width={60}
						height={60}
						src={image}
						alt={image}
					/>
				)}
			</div>
			<div className="flex flex-col justify-center truncate">
				{children}
				{!children && `착용중인 ${armoryType ?? '아이템'} 이/가 없습니다.`}
			</div>
		</div>
	);
};

export default ArmoryCard;

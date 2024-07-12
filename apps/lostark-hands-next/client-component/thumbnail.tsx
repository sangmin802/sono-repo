'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import { Chip, Image } from '@sono-repo/ui';

import { GRADE_BG_COLOR } from '@/constant';

import type { TGrade } from '@/type';

interface IThumbnailProps {
	className?: string;
	chip?: string | number;
	grade?: TGrade;
	src: string;
	alt: string;
}

const Thumbnail = ({ className, src, alt, chip, grade }: IThumbnailProps) => {
	return (
		<div
			className={cn(
				'relative shrink-0 overflow-hidden rounded-[4px]',
				grade ? GRADE_BG_COLOR[grade] : 'bg-main-10',
				className
			)}
		>
			{chip && (
				<Chip
					className="absolute bottom-[2px] right-[2px] max-w-[48px] truncate"
					type="transparent"
				>
					{chip}
				</Chip>
			)}
			{src && (
				<Image
					className="size-full"
					as={NextImage}
					width={60}
					height={60}
					src={src}
					alt={alt}
					priority
				/>
			)}
		</div>
	);
};

export default Thumbnail;

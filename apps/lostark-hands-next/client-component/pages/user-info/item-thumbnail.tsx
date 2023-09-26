'use client';

import cn from 'classnames';
import Image from 'next/image';

import { Chip } from '@sono-repo/ui';

import { GRADE_BG_COLOR } from '@/constant';

import type { TGrade } from '@/type';

type TConditionalProps =
	| { src: string; alt: string }
	| Partial<{ src: undefined; alt: undefined }>;

interface IItemThumbnailProps {
	className?: string;
	chip?: string | number;
	grade?: TGrade;
}

const ItemThumbnail = ({
	className,
	src,
	alt,
	chip,
	grade
}: IItemThumbnailProps & TConditionalProps) => {
	return (
		<div
			className={cn(
				'relative shrink-0 rounded-[4px] border border-white',
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
					width={60}
					height={60}
					src={src}
					alt={alt}
				/>
			)}
		</div>
	);
};

export default ItemThumbnail;

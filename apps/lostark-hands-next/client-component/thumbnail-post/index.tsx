'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

interface ITumbnailPostProps {
	className?: string;
	title: string;
	thumbnail: string;
	link: string;
	date: string;
}

const ThumbnailPost = ({
	className,
	title,
	thumbnail,
	link,
	date
}: ITumbnailPostProps) => {
	const handleClickThumbnail = () => {
		window.open(link);
	};

	return (
		<div
			className={cn(
				'shrink-0 cursor-pointer [&_div]:text-gray-300 [&_div]:hover:font-bold [&_div]:hover:text-white',
				className
			)}
			onClick={handleClickThumbnail}
		>
			<Image
				as={NextImage}
				className="h-[67px] w-[140px] overflow-hidden rounded-[2px]"
				src={thumbnail}
				alt={title}
				width={140}
				height={67}
				priority
			/>
			<div className="mt-[12px] space-y-[4px]">
				<div className="truncate leading-[16px]">{title}</div>
				<div className="truncate leading-[16px]">{date}</div>
			</div>
		</div>
	);
};

export default ThumbnailPost;

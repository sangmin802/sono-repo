'use client';

import cn from 'classnames';
import Image from 'next/image';

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
				'cursor-pointer [&_div]:text-gray-300 [&_div]:hover:font-bold [&_div]:hover:text-white',
				className
			)}
			onClick={handleClickThumbnail}
		>
			<Image
				className="rounded-[2px]"
				src={thumbnail}
				alt={title}
				width={750}
				height={357}
			/>
			<div className="mt-[12px]">
				<div className="truncate">{title}</div>
				<div className="truncate">{date}</div>
			</div>
		</div>
	);
};

export default ThumbnailPost;

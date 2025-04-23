'use client';

import type { ComponentProps, ReactNode } from 'react';
import cn from 'classnames';

import Thumbnail from '@/client-component/thumbnail';

interface IThumbnailCardProps {
	children: ReactNode;
	onClick?: () => void;
}

const ThumbnailCard = ({
	children,
	onClick,
	...props
}: IThumbnailCardProps & ComponentProps<typeof Thumbnail>) => {
	return (
		<div
			className={cn('flex gap-x-[6px]', { 'cursor-pointer': !!onClick })}
			onClick={onClick}
		>
			<Thumbnail {...props} />
			<div className="flex min-w-0 grow flex-col justify-center gap-y-[2px]">
				{children}
			</div>
		</div>
	);
};

export default ThumbnailCard;

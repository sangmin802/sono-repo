'use client';

import type { ComponentProps, ReactNode } from 'react';
import cn from 'classnames';

import Skeleton from '@/client-component/skeleton';
import Thumbnail from '@/client-component/thumbnail';

interface IThumbnailCardProps {
	children: ReactNode;
	onClick?: () => void;
}

export const ThumbnailCard = ({
	children,
	onClick,
	...props
}: IThumbnailCardProps & ComponentProps<typeof Thumbnail>) => {
	return (
		<div
			className={cn('flex space-x-[6px]', { 'cursor-pointer': !!onClick })}
			onClick={onClick}
		>
			<Thumbnail {...props} />
			<div className="flex min-w-0 grow flex-col justify-center space-y-[2px]">
				{children}
			</div>
		</div>
	);
};

export const ThumbnailCardSkeleton = ({
	className
}: {
	className?: string;
}) => (
	<div className="flex space-x-[6px]">
		<Skeleton
			className={className}
			type="LIGHT"
		/>
		<div className="flex min-w-0 grow flex-col justify-center space-y-[1px]">
			<Skeleton
				className="h-[18px]"
				randomWidth={{ max: 120, min: 60 }}
				type="LIGHT"
			/>
			<Skeleton
				className="h-[21px]"
				randomWidth={{ max: 120, min: 60 }}
				type="LIGHT"
			/>
		</div>
	</div>
);

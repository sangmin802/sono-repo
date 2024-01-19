'use client';

import type { ElementType, ReactNode } from 'react';
import cn from 'classnames';

interface ISkeletonProps<T> {
	as?: T;
	type?: 'DARK' | 'LIGHT';
	className?: string;
	randomWidth?: {
		unit?: '%' | 'px';
		max: number;
		min: number;
	};
	children?: ReactNode;
}

const Skeleton = <T extends ElementType>({
	as,
	type = 'DARK',
	className,
	randomWidth,
	children
}: ISkeletonProps<T>) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			{...(randomWidth
				? {
						style: {
							width: `${Math.round(
								Math.random() * (randomWidth.max - randomWidth.min) +
									randomWidth.min
							)}${randomWidth.unit ?? 'px'}`
						}
				  }
				: undefined)}
			className={cn('animate-pulse rounded-[4px]', className, {
				'bg-main-20': type === 'DARK',
				'bg-main-30': type === 'LIGHT'
			})}
		>
			{children}
		</Tag>
	);
};

export default Skeleton;

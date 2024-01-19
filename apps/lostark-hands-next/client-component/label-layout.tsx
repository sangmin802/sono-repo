'use client';

import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	ElementType,
	ReactNode
} from 'react';
import cn from 'classnames';

import DataEmptyFunnel from '@/client-component/data-empty-funnel';

type TLabelLayoutProps<T extends ElementType> = {
	label: string;
	className?: string;
	afterLabel?: ReactNode;
	empty?: ComponentProps<typeof DataEmptyFunnel>['data'];
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const LabelLayout = <T extends ElementType>({
	className,
	label,
	afterLabel,
	empty,
	as,
	children,
	...props
}: TLabelLayoutProps<T>) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			className={cn('rounded-[6px] bg-main-20 px-[8px] py-[12px]', className)}
			{...props}
		>
			<div className="mb-[16px] flex items-end space-x-[16px] border-b border-[#7f7f7f] pb-[6px] leading-[16px]">
				<div className="w-fit text-[16px] font-bold">{label}</div>
				{afterLabel}
			</div>
			<DataEmptyFunnel
				as="fragment"
				data={empty ? empty : { status: false }}
			>
				{children}
			</DataEmptyFunnel>
		</Tag>
	);
};

export const LabelLayoutSkeleton = <T extends ElementType>({
	className,
	as,
	afterLabel,
	children
}: {
	className?: string;
	as?: T;
	afterLabel?: boolean;
	children?: ReactNode;
}) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			className={cn(
				'animate-pulse rounded-[6px] bg-main-20 px-[8px] py-[12px]',
				className
			)}
		>
			<div className="mb-[16px] flex items-end space-x-[16px] border-b border-[#7f7f7f] pb-[6px] leading-[16px]">
				<div
					style={{ width: Math.random() * 20 + 50 }}
					className="h-[16px] animate-pulse rounded-[2px] bg-main-30"
				/>
				{afterLabel && (
					<div
						style={{ width: Math.random() * 20 + 90 }}
						className="h-[16px] animate-pulse rounded-[2px] bg-main-30"
					/>
				)}
			</div>
			{children}
		</Tag>
	);
};

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
	label: ReactNode;
	className?: string;
	empty?: ComponentProps<typeof DataEmptyFunnel>['data'];
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const LabelLayout = <T extends ElementType>({
	className,
	label,
	empty,
	as,
	children,
	...props
}: TLabelLayoutProps<T>) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			className={cn('bg-main-20 rounded-[6px] px-[8px] py-[12px]', className)}
			{...props}
		>
			<div className="mb-[16px] flex items-end gap-x-[16px] border-b border-[#7f7f7f] pb-[6px] leading-[16px]">
				{label}
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

export default LabelLayout;

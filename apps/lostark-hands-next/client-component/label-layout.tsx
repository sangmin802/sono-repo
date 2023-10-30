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

const LabelLayout = <T extends ElementType>({
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

export default LabelLayout;

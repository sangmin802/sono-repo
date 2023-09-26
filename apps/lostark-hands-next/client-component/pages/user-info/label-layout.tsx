'use client';

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type LabelLayoutProps<T extends ElementType> = {
	label: string;
	afterLabel?: ReactNode;
	empty?: Partial<{ status: boolean; message: string }>;
	as?: T;
	children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const LabelLayout = <T extends ElementType>({
	label,
	afterLabel,
	empty,
	as,
	children,
	...props
}: LabelLayoutProps<T>) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			className="rounded-[6px] bg-main-20 px-[8px] py-[18px]"
			{...props}
		>
			<div className="mb-[18px] flex items-end space-x-[16px] leading-[16px]">
				<div className="w-fit text-[16px] font-bold">{label}</div>
				{afterLabel}
			</div>
			{empty?.status ? empty?.message : children}
		</Tag>
	);
};

export default LabelLayout;

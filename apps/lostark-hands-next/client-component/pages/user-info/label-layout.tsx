'use client';

import type {
	ComponentPropsWithoutRef,
	ElementType,
	ReactElement
} from 'react';

import Label from '@/client-component/label';

type LabelLayoutProps<T extends ElementType> = {
	label: string;
	as?: T;
	children: ReactElement;
} & ComponentPropsWithoutRef<T>;

const LabelLayout = <T extends ElementType>({
	label,
	as,
	children,
	...props
}: LabelLayoutProps<T>) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			className="rounded-[6px] bg-main-20 p-[8px]"
			{...props}
		>
			<Label className="mb-[12px] w-fit">{label}</Label>
			{children}
		</Tag>
	);
};

export default LabelLayout;

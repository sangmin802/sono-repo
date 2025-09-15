'use client';

import type { ReactNode } from 'react';
import cn from 'classnames';

interface ILabelProps {
	className?: string;
	children: ReactNode;
}

const Label = ({ className, children }: ILabelProps) => {
	return (
		<div
			className={cn('bg-main-30 rounded-[6px] px-[6px] py-[4px]', className)}
		>
			{children}
		</div>
	);
};

export default Label;

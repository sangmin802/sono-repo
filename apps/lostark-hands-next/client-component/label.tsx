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
			className={cn('rounded-[6px] bg-main-30 px-[6px] py-[4px]', className)}
		>
			{children}
		</div>
	);
};

export default Label;

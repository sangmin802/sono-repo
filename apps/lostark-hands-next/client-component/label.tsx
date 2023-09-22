'use-client';

import type { ReactElement } from 'react';
import cn from 'classnames';

interface ILabelProps {
	className?: string;
	children: string | ReactElement;
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

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

const Button = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
	return (
		<button
			className={cn('flex items-center justify-center', className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

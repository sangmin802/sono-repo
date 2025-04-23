import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

const Button = ({
	className,
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
	return (
		<button
			className={cn(
				'ui:flex ui:cursor-pointer ui:items-center ui:justify-center',
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

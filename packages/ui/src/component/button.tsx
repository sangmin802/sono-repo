import type { ButtonHTMLAttributes, ReactNode } from 'react';

const Button = ({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
	return <button {...props}>{children}</button>;
};

export default Button;

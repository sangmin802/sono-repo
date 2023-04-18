import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export const Button: FC<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

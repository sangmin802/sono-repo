import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

const Button: FC<
	PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export default Button;

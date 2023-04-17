import { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	...props
}) => {
	return <button {...props}>button</button>;
};

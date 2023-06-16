import type { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	className,
	...props
}) => {
	return (
		<input
			className={cn(
				'outline-none border border-gray-200 rounded-[4px] p-[4px] focus:border-gray-600',
				className
			)}
			{...props}
		/>
	);
};

export default Input;

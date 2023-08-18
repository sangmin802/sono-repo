import type { InputHTMLAttributes } from 'react';
import cn from 'classnames';

const Input = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className={cn('outline-none rounded-[6px] p-[4px] text-black', className)}
			spellCheck="false"
			{...props}
		/>
	);
};

export default Input;

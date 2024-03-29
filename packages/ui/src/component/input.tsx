import type { ChangeEvent, InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface IInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange: (value: string) => void;
}

const Input = ({ className, onChange, ...props }: IInputProps) => {
	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	return (
		<input
			className={cn('rounded-[6px] p-[4px] outline-none', className)}
			spellCheck="false"
			onChange={handleChangeInput}
			{...props}
		/>
	);
};

export default Input;

import { type ChangeEvent, forwardRef, type InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface IInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ className, onChange, ...props }, ref) => {
		const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.value);
		};

		return (
			<input
				className={cn('ui:rounded-[6px] ui:p-[4px] ui:outline-none', className)}
				spellCheck="false"
				onChange={handleChangeInput}
				ref={ref}
				{...props}
			/>
		);
	}
);

Input.displayName = 'Input';

export default Input;

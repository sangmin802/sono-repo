import type { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

enum TChipType {
	'primary' = 'ui:bg-purple-500',
	'info' = 'ui:bg-gray-700',
	'transparent' = 'ui:bg-gray-950/50'
}

interface IChipProps extends HTMLAttributes<HTMLDivElement> {
	type: keyof typeof TChipType;
	children: ReactNode;
}

const Chip = ({ className, type, children, ...props }: IChipProps) => {
	return (
		<div
			{...props}
			className={cn(
				className,
				TChipType[type],
				'ui:h-fit ui:w-fit ui:rounded-[4px] ui:px-[4px] ui:text-[12px]'
			)}
		>
			{children}
		</div>
	);
};

export default Chip;

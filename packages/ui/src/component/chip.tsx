import type { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

enum TChipType {
	'primary' = 'bg-purple-500',
	'info' = 'bg-gray-700',
	'transparent' = 'bg-gray-950/50'
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
				'w-fit rounded-[4px] px-[4px] text-[12px]'
			)}
		>
			{children}
		</div>
	);
};

export default Chip;

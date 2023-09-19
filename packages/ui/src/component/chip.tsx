import type { ReactNode } from 'react';
import cn from 'classnames';

enum TChipType {
	'transparent' = 'bg-gray-950/80'
}

interface IChipProps {
	className?: string;
	type: keyof typeof TChipType;
	children: ReactNode;
}

const Chip = ({ className, type, children }: IChipProps) => {
	return (
		<div
			className={cn(
				className,
				TChipType[type],
				'absolute bottom-[4px] right-[4px] rounded-[4px] px-[4px] text-[12px]'
			)}
		>
			{children}
		</div>
	);
};

export default Chip;

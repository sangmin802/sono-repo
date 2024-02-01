import { type ReactElement, useState } from 'react';
import cn from 'classnames';

import Arrow from './arrow';

type TAction = 'OPEN' | 'CLOSE';
type TArrowMode = 'DARK' | 'WHITE';

interface IContent {
	className?: string;
	children: ReactElement | string | number;
}

interface IAccordionProps {
	className?: string;
	summary: IContent;
	details: IContent;
	arrowMode?: TArrowMode;
	onClick?: (type: TAction) => void;
}

const Accordion = ({
	className,
	summary,
	details,
	arrowMode = 'WHITE',
	onClick
}: IAccordionProps) => {
	const [open, setOpen] = useState(false);

	const handleClickSummary = () => {
		setOpen(!open);

		onClick?.(open ? 'CLOSE' : 'OPEN');
	};

	return (
		<div className={className}>
			<div
				className={cn(
					'flex cursor-pointer items-center justify-between space-x-[6px] px-[4px]',
					summary.className
				)}
				onClick={handleClickSummary}
			>
				<div className="text-[16px] text-inherit">{summary.children}</div>
				<Arrow
					className={cn('duration-200', { 'rotate-180': open })}
					fill={arrowMode === 'WHITE' ? '#efefef' : '#222'}
				/>
			</div>
			<div
				className={cn(
					'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out',
					{ 'grid-rows-[1fr]': open }
				)}
			>
				<div className="overflow-hidden">
					<div className={cn('px-[6px] py-[10px]', details.className)}>
						{details.children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;

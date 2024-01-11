import { type ReactElement, useEffect, useRef, useState } from 'react';
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
	const [height, setHeight] = useState<number>(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleClickSummary = () => {
		setOpen(!open);

		onClick?.(open ? 'CLOSE' : 'OPEN');
	};

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new ResizeObserver((entry) => {
			const target = entry[0].borderBoxSize[0];

			setHeight(target.blockSize);
		});

		observer.observe(el);

		return () => {
			observer.unobserve(el);
		};
	}, []);

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
				className="overflow-hidden transition-max-height duration-300 ease-in-out"
				style={{ maxHeight: open ? height : 0 }}
			>
				<div
					className={cn('px-[6px] py-[10px]', details.className)}
					ref={containerRef}
				>
					{details.children}
				</div>
			</div>
		</div>
	);
};

export default Accordion;

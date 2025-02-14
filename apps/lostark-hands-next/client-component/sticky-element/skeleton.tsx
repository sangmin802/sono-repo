import type { ElementType, ReactNode } from 'react';
import cn from 'classnames';

const StickyElementSkeleton = <T extends ElementType>({
	as,
	top,
	className,
	children
}: {
	as?: T;
	top?: number;
	className?: string;
	children?: ReactNode;
}) => {
	const Tag = as ?? 'div';

	return (
		<>
			<div className="self-start" />
			<Tag
				style={{ top }}
				className={cn(
					className,
					'sticky bg-main-10 transition duration-[.3s] ease-out'
				)}
			>
				{children}
			</Tag>
		</>
	);
};

export default StickyElementSkeleton;

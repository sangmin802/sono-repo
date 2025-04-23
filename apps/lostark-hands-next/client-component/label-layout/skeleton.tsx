import type { ElementType, ReactNode } from 'react';
import cn from 'classnames';

const LabelLayoutSkeleton = <T extends ElementType>({
	className,
	as,
	children
}: {
	className?: string;
	as?: T;
	children?: ReactNode;
}) => {
	const Tag = as ?? 'div';

	return (
		<Tag
			className={cn(
				'bg-main-20 animate-pulse rounded-[6px] px-[8px] py-[12px]',
				className
			)}
		>
			<div className="mb-[16px] flex items-end gap-x-[16px] border-b border-[#7f7f7f] pb-[6px] leading-[16px]">
				<div
					style={{ width: Math.random() * 20 + 50 }}
					className="bg-main-30 h-[16px] animate-pulse rounded-[2px]"
				/>
			</div>
			{children}
		</Tag>
	);
};

export default LabelLayoutSkeleton;

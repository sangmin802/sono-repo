import type { FC, ReactNode } from 'react';
import cn from 'classnames';

interface ISectionLayoutProps {
	className?: string;
	title: string;
	children: ReactNode;
}

const SectionLayout: FC<ISectionLayoutProps> = ({
	className,
	title,
	children
}) => {
	return (
		<section className={cn('px-[16px] py-[20px]', className)}>
			<div className="mb-[10px] text-[22px] font-bold">{title}</div>
			{children}
		</section>
	);
};

export default SectionLayout;

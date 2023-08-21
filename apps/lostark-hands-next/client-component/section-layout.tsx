import type { ReactNode } from 'react';

interface ISectionLayoutProps {
	className?: string;
	title: string;
	children: ReactNode;
}

const SectionLayout = ({ className, title, children }: ISectionLayoutProps) => {
	return (
		<section className={className}>
			<div className="mb-[10px] text-[22px] font-bold">{title}</div>
			{children}
		</section>
	);
};

export default SectionLayout;

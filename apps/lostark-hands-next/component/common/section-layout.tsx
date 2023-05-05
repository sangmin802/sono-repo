import { FC, ReactNode } from 'react';

interface ISectionLayoutProps {
	title: string;
	children: ReactNode;
}

const SectionLayout: FC<ISectionLayoutProps> = ({ title, children }) => {
	return (
		<section>
			<div>{title}</div>
			<div>{children}</div>
		</section>
	);
};

export default SectionLayout;

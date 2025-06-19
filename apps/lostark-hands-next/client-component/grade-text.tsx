import type { ReactNode } from 'react';
import cn from 'classnames';

import type { TGrade } from '@/types';

export const GRADE_TEXT_COLOR: Record<TGrade, string> = {
	일반: 'text-normal',
	고급: 'text-advanced',
	희귀: 'text-rare',
	영웅: 'text-epic',
	전설: 'text-legendary',
	유물: 'text-relic',
	고대: 'text-ancient',
	에스더: 'text-esther'
};

const GradeText = ({
	className,
	grade,
	children
}: {
	className?: string;
	grade: TGrade;
	children: ReactNode;
}) => {
	return (
		<div
			className={cn(className, {
				[GRADE_TEXT_COLOR[grade]]: grade
			})}
		>
			{children}
		</div>
	);
};

export default GradeText;

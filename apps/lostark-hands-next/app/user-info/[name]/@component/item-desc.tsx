import type { ReactNode } from 'react';
import cn from 'classnames';

import { GRADE_TEXT_COLOR } from '@/constant';

import type { TGrade } from '@/type';

interface IItemDescProps {
	subTitle: string;
	afterSubTitle?: ReactNode;
	title: string;
	grade: TGrade;
}

/**
 * @deprecated
 * 필요없어보임
 */
const ItemDesc = ({
	subTitle,
	afterSubTitle,
	title,
	grade
}: IItemDescProps) => {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex items-center space-x-[4px]">
				<div className="text-[12px]">{subTitle}</div>
				{afterSubTitle}
			</div>
			<div
				className={cn('line-clamp-2', {
					[GRADE_TEXT_COLOR[grade]]: grade
				})}
			>
				{title}
			</div>
		</div>
	);
};

export default ItemDesc;

import type { ReactNode } from 'react';
import cn from 'classnames';

import { removeHtmlTag } from '@sono-repo/util/convert';

import { GRADE_TEXT_COLOR } from '@/constant';

import type { TGrade } from '@/type';

interface IItemDescProps {
	subTitle: string;
	afterSubTitle?: ReactNode;
	title: string;
	grade?: TGrade;
}

const ItemDesc = ({
	subTitle,
	afterSubTitle,
	title,
	grade
}: IItemDescProps) => {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex items-center space-x-[4px]">
				<div className="text-[12px]">{removeHtmlTag(subTitle)}</div>
				{afterSubTitle}
			</div>
			<div
				className={cn({
					[GRADE_TEXT_COLOR[grade as TGrade]]: grade
				})}
			>
				{title}
			</div>
		</div>
	);
};

export default ItemDesc;

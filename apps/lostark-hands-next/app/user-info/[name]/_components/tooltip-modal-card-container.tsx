'use client';

import type { PropsWithChildren } from 'react';
import { Fragment, type ReactNode, useState } from 'react';

import { Modal, ModalLayout } from '@sono-repo/ui';

import DangerousHTML from '@/client-component/dangerous-html';
import GradeText from '@/client-component/grade-text';
import IndentStringGroup from '@/client-component/indent-string-group';
import ItemPartBox from '@/client-component/item-part-box';
import Thumbnail from '@/client-component/thumbnail';
import TripodSkillCustom from '@/client-component/tripod-skill-custom';

import type { TGrade } from '@/types';
import type { TElementUnionArray } from '@/types/element-json';

interface TooltipModalCardContainerProps extends PropsWithChildren {
	className?: string;
	data: {
		name: string;
		subTitle?: string;
		afterSubTitle?: ReactNode;
		icon: string;
		chip?: string | number;
		grade: TGrade;
		tooltip?: TElementUnionArray;
	};
}

const TooltipModalCardContainer = ({
	className,
	data,
	children
}: TooltipModalCardContainerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const { name, subTitle, afterSubTitle, icon, chip, grade, tooltip } = data;
	const contents = Object.values(tooltip ?? {});

	const handleClickOpen = () => {
		if (!name) return;

		setIsOpen(true);
	};

	const handleClickClose = () => {
		setIsOpen(false);
	};

	return (
		<div
			className={className}
			onClick={handleClickOpen}
		>
			{children}
			<Modal
				isOpen={isOpen}
				onClickOutside={handleClickClose}
			>
				<ModalLayout confirm={{ show: true, onClick: handleClickClose }}>
					<div className="mb-[18px] flex gap-x-[8px]">
						<Thumbnail
							className="h-[60px] w-[60px]"
							src={icon}
							alt={name}
							grade={grade}
							chip={chip}
						/>
						<div className="flex flex-col justify-center">
							<div className="flex items-center gap-x-[4px]">
								{subTitle && <div className="text-[12px]">{subTitle}</div>}
								{afterSubTitle}
							</div>
							<GradeText
								className="line-clamp-2"
								grade={grade}
							>
								{name}
							</GradeText>
						</div>
					</div>
					<div className="flex flex-col gap-y-[16px]">
						{contents.map((item, index) => (
							<Fragment key={index}>
								{item.type === 'ItemPartBox' && <ItemPartBox {...item} />}
								{item.type === 'IndentStringGroup' && (
									<IndentStringGroup {...item} />
								)}
								{item.type === 'TripodSkillCustom' && (
									<TripodSkillCustom {...item} />
								)}
								{item.type === 'SingleTextBox' && (
									<DangerousHTML
										className="text-[12px] [&_*]:text-[12px]"
										html={item.value}
									/>
								)}
							</Fragment>
						))}
					</div>
				</ModalLayout>
			</Modal>
		</div>
	);
};

export default TooltipModalCardContainer;

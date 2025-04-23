'use client';

import type { ReactNode } from 'react';

import type { ModalProps } from '@sono-repo/ui';
import { ModalLayout } from '@sono-repo/ui';

import ArmoryTooltip from '@/client-component/armory-tooltip';
import GradeText from '@/client-component/grade-text';
import Thumbnail from '@/client-component/thumbnail';

import type { TGrade } from '@/type';
import type { TElementUnionArray } from '@/type/element-json';

interface ArmoryTooltipModalProps extends ModalProps {
	name: string;
	subTitle?: string;
	afterSubTitle?: ReactNode;
	icon: string;
	chip?: string | number;
	grade: TGrade;
	tooltip?: TElementUnionArray;
}

const ArmoryTooltipModal = ({
	name,
	subTitle,
	afterSubTitle,
	icon,
	chip,
	grade,
	tooltip
}: ArmoryTooltipModalProps) => {
	const contents = Object.values(tooltip ?? {});

	return (
		<ModalLayout confirm={{ show: true }}>
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
				{contents.map((item, idx) => (
					<ArmoryTooltip
						key={idx}
						item={item}
					/>
				))}
			</div>
		</ModalLayout>
	);
};

export default ArmoryTooltipModal;

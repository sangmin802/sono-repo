'use client';

import ArmoryTooltip from '@/client-component/armory-tooltip';
import GradeText from '@/client-component/grade-text';
import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';
import Thumbnail from '@/client-component/thumbnail';

const ArmoryTooltipModal = ({
	name,
	subTitle,
	afterSubTitle,
	icon,
	chip,
	grade,
	tooltip
}: IModalItemProps['armoryTooltipModal']) => {
	const contents = Object.values(tooltip ?? {});

	return (
		<ModalLayout footerProps={{ cancel: { show: false } }}>
			<div className="mb-[18px] flex space-x-[8px]">
				<Thumbnail
					className="h-[60px] w-[60px]"
					src={icon}
					alt={name}
					grade={grade}
					chip={chip}
				/>
				<div className="flex flex-col justify-center">
					<div className="flex items-center space-x-[4px]">
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
			<div className="space-y-[16px]">
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

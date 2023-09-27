'use client';

import DangerousHTML from '@/client-component/dangerous-html';
import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';
import IndentStringGroup from '@/client-component/pages/user-info/indent-string-group';
import ItemPartBox from '@/client-component/pages/user-info/item-part-box';
import ItemThumbnail from '@/client-component/pages/user-info/item-thumbnail';
import ItemTitle from '@/client-component/pages/user-info/item-title';
import TripodSkillCustom from '@/client-component/pages/user-info/tripod-skill-custom';

import type { TElement } from '@/type/element-json';

const mappedContent = (item: TElement[keyof TElement], idx: number) => {
	switch (item.type) {
		case 'ItemPartBox':
			return (
				<ItemPartBox
					key={idx}
					{...item}
				/>
			);
		case 'IndentStringGroup':
			return (
				<IndentStringGroup
					key={idx}
					{...item}
				/>
			);
		case 'TripodSkillCustom':
			return (
				<TripodSkillCustom
					key={idx}
					{...item}
				/>
			);
		case 'SingleTextBox':
			return (
				<DangerousHTML
					className="text-[12px] [&_*]:text-[12px]"
					key={idx}
					html={item.value}
				/>
			);
		default:
			return null;
	}
};

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
				<ItemThumbnail
					className="h-[60px] w-[60px]"
					src={icon}
					alt={name}
					grade={grade}
					chip={chip}
				/>
				<ItemTitle
					subTitle={subTitle}
					afterSubTitle={afterSubTitle}
					title={name}
					grade={grade}
				/>
			</div>
			<div className="space-y-[16px]">{contents.map(mappedContent)}</div>
		</ModalLayout>
	);
};

export default ArmoryTooltipModal;

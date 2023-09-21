'use client';

import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';
import IndentStringGroup from '@/client-component/pages/user-info/indent-string-group';
import ItemPartBox from '@/client-component/pages/user-info/item-part-box';
import ItemThumbnail from '@/client-component/pages/user-info/item-thumbnail';
import ItemTitle from '@/client-component/pages/user-info/item-title';
import QualityChip from '@/client-component/pages/user-info/quality-chip';

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
		default:
			return null;
	}
};

const EquipmentModal = ({
	item: { icon, name, grade, tooltip },
	itemTitle
}: IModalItemProps['equipmentModal']) => {
	const contents = Object.values(tooltip ?? {});

	return (
		<ModalLayout footerProps={{ cancel: { show: false } }}>
			<div className="mb-[18px] flex space-x-[8px]">
				<ItemThumbnail
					className="h-[60px] w-[60px]"
					src={icon}
					alt={name}
					grade={grade}
				/>
				<ItemTitle
					subTitle={itemTitle.value.leftStr2}
					afterSubTitle={<QualityChip size={itemTitle.value.qualityValue} />}
					title={name}
					grade={grade}
				/>
			</div>
			<div className="space-y-[16px]">{contents.map(mappedContent)}</div>
		</ModalLayout>
	);
};

export default EquipmentModal;

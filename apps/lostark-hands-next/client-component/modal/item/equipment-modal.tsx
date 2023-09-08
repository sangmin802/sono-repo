'use client';

import cn from 'classnames';

import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';

import { GRADE_TEXT_COLOR } from '@/constant';

const EquipmentModal = ({
	item,
	itemTitle
}: IModalItemProps['equipmentModal']) => {
	console.log(item, itemTitle);
	return (
		<ModalLayout
			footerProps={{ cancel: { show: false } }}
			// containerClassName="space-y-[12px]"
		>
			<div className={cn(GRADE_TEXT_COLOR[item.grade])}>{item.name}</div>
		</ModalLayout>
	);
};

export default EquipmentModal;

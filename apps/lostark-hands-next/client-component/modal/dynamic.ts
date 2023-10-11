import dynamic from 'next/dynamic';

import type { IModalItemProps } from '@/client-component/modal/types';

export default {
	ITEM_LIST_MODAL: dynamic<IModalItemProps['itemListModal']>(
		() => import('@/client-component/modal/item/item-list-modal')
	),
	DESC_LIST_MODAL: dynamic<IModalItemProps['descListModal']>(
		() => import('@/client-component/modal/item/desc-list-modal')
	),
	ARMORY_TOOLTIP_MODAL: dynamic<IModalItemProps['armoryTooltipModal']>(
		() => import('@/client-component/modal/item/armory-tooltip-modal')
	),
	ARMORY_TOOLTIP_LIST_MODAL: dynamic<IModalItemProps['armoryTooltipListModal']>(
		() => import('@/client-component/modal/item/armory-tooltip-list-modal')
	)
};

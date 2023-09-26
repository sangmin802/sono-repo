import dynamic from 'next/dynamic';

import type { IModalItemProps } from '@/client-component/modal/types';

export default {
	CALENDAR_REWARD_MODAL: dynamic<IModalItemProps['calendarRewardModal']>(
		() => import('@/client-component/modal/item/calendar-reward-modal')
	),
	STATS_MODAL: dynamic<IModalItemProps['statsModal']>(
		() => import('@/client-component/modal/item/stats-modal')
	),
	ARMORY_TOOLTIP_MODAL: dynamic<IModalItemProps['armoryTooltipModal']>(
		() => import('@/client-component/modal/item/armory-tooltip-modal')
	),
	CARD_EFFECT_MODAL: dynamic<IModalItemProps['cardEffectModal']>(
		() => import('@/client-component/modal/item/card-effect-modal')
	)
};

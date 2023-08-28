import dynamic from 'next/dynamic';

import type { IModalItemProps } from '@/client-component/modal/types';

export default {
	CALENDAR_REWARD_MODAL: dynamic<IModalItemProps['calendarRewardModal']>(
		() => import('@/client-component/modal/item/calendar-reward-modal')
	),
	STATS_MODAL: dynamic<IModalItemProps['statsModal']>(
		() => import('@/client-component/modal/item/stats-modal')
	)
};

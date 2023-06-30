import type { TCalendarItem } from '@/client-component/pages/home/types';

export interface IModalItemProps {
	calendarRewardModal: { time: string; list: TCalendarItem['rewardItems'] };
}

export type TModalItem = {
	[key in keyof IModalItemProps]: { name: key; props: IModalItemProps[key] };
}[keyof IModalItemProps];

export interface IModalStateContext {
	open: boolean;
	modalItem: TModalItem | null;
}

export interface IModalDispatchContext {
	onOpenModal: (item: TModalItem) => void;
	onCloseModal: () => void;
}

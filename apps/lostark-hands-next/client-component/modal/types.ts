import type {
	ICardEffect,
	IParsedArmoryEquipment,
	IStat
} from '@/service/armories/types';
import type { IRewardItem } from '@/service/game-contents/type';

import type { TElement } from '@/type/element-json';

export interface IModalItemProps {
	calendarRewardModal: {
		title: string;
		list: IRewardItem[];
	};
	statsModal: {
		stats: IStat[];
	};
	equipmentModal: {
		item: IParsedArmoryEquipment;
		itemTitle: TElement['ItemTitle'];
	};
	cardEffectModal: {
		effects: ICardEffect[];
	};
}

export type TModalItem = {
	[key in keyof IModalItemProps]: {
		name: key;
		props: IModalItemProps[key];
	};
}[keyof IModalItemProps];

export interface IModalStateContext {
	open: boolean;
	modalItem: TModalItem | null;
}

export interface IModalDispatchContext {
	onOpenModal: (item: TModalItem) => void;
	onCloseModal: () => void;
}

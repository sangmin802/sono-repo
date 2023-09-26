import type { ReactNode } from 'react';

import type { ICardEffect, IStat } from '@/service/armories/types';
import type { IRewardItem } from '@/service/game-contents/type';

import type { TGrade } from '@/type';
import type { TElementUnionArray } from '@/type/element-json';

export interface IModalItemProps {
	calendarRewardModal: {
		title: string;
		list: IRewardItem[];
	};
	statsModal: {
		stats: IStat[];
	};
	armoryTooltipModal: {
		name: string;
		subTitle: string;
		afterSubTitle?: ReactNode;
		icon: string;
		chip?: string | number;
		grade?: TGrade;
		tooltip?: TElementUnionArray;
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

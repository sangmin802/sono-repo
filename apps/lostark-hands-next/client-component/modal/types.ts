import type { ReactNode } from 'react';

import type { TGrade } from '@/type';
import type { TElementUnionArray } from '@/type/element-json';

export interface IModalItemProps {
	itemListModal: {
		title: string;
		list: { name: string; icon: string; grade: TGrade }[];
	};
	descListModal: {
		title?: string;
		list: { title: string; afterTitle?: string; desc: string }[];
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
	armoryTooltipListModal: {
		list: {
			icon: string;
			name: string;
			grade?: TGrade;
			tooltip: TElementUnionArray;
		}[];
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

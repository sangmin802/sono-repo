type TNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TElement = `${TNumber}${TNumber}${TNumber}`;

export type TElementJson = {
	[key in
		| 'NameTagBox'
		| 'SingleTextBox'
		| 'MultiTextBox'
		| 'ShowMeTheMoney']: string;
} & {
	ItemTitle: {
		bEquip: number;
		leftStr0: string;
		leftStr1: string;
		leftStr2: string;
		qualityValue: number;
		rightStr0: string;
		slotData: {
			advBookIcon: number;
			battleItemTypeIcon: number;
			cardIcon: boolean;
			friendship: number;
			iconGrade: number;
			iconPath: string;
			imagePath: string;
			islandIcon: number;
			rtString: string;
			seal: boolean;
			temporary: number;
			town: number;
			trash: number;
		};
	};
	ItemPartBox: {
		[key in TElement]: string;
	};
	IndentStringGroup: {
		[key in TElement]: {
			contentStr: {
				[key in TElement]: {
					bPoint: boolean;
					contentStr: string;
				};
			};
			topStr: string;
		};
	};
	SetItemGroup: {
		firstMsg: string;
		itemData: {
			[key in TElement]: {
				label: string;
				slotData: {
					ioconGrade: number;
					iconPath: string;
					imagePath: string;
				};
			};
		};
	};
};

export type TElementUnion = {
	[key in keyof TElementJson]: {
		type: key;
		value: TElementJson[key];
	};
};

export type TElementUnionArray = TElementUnion[keyof TElementJson][];

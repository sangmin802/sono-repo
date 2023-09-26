type TNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type TElementKey = `Element_${TNumber}${TNumber}${TNumber}`;

type TElementJson = {
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
		[key in TElementKey]: string;
	};
	IndentStringGroup: {
		[key in TElementKey]: {
			contentStr: {
				[key in TElementKey]: {
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
			[key in TElementKey]: {
				label: string;
				slotData: {
					ioconGrade: number;
					iconPath: string;
					imagePath: string;
				};
			};
		};
	};
	TripodSkillCustom: {
		[key in TElementKey]: {
			desc: string;
			lock: boolean;
			name: string;
			tier: string;
			slotData: {
				iconGrade: number;
				iconPath: string;
			};
		};
	};
};

export type TElement = {
	[key in keyof TElementJson]: {
		type: key;
		value: TElementJson[key];
	};
};

export type TElementUnionArray = TElement[keyof TElementJson][];

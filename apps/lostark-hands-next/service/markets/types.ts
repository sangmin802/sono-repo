import type { ICode, TGrade } from '@/type';

export interface IOptions {
	categories: ({
		subs: ICode[];
	} & ICode)[];
	itemGrades: string[];
	itemTiers: number[];
	classes: string[];
}

export interface IMarketsFilter {
	sort?: string;
	categoryCode: number;
	characterClass?: string;
	itemTier?: number;
	itemGrade?: string;
	itemName?: string;
	pageNo: number;
	sortCondition?: string;
}

export interface IItem {
	id: number;
	name: string;
	grade: TGrade;
	icon: string;
	bundleCount: number; // 판매 갯수 단위
	tradeRemainCount: number | null; // 남은 거래 횟수
	yDayAvgPrice: number;
	recentPrice: number;
	currentMinPrice: number;
}

export interface IResponseItemList {
	pageNo: number;
	pageSize: number;
	totalCount: number;
	items: IItem[];
}

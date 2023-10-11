import type { TGrade } from '@/type';

/** 캘린더 모험 섬 */
export interface ICalendar {
	categoryName: string;
	contentsName: string;
	contentsIcon: string;
	minItemLevel: number;
	startTimes: string[] | null;
	location: string;
	rewardItems: {
		name: string;
		icon: string;
		grade: TGrade;
		startTimes: string[];
	}[];
}

export interface IRewardItem {
	name: string;
	icon: string;
	grade: TGrade;
	startTimes: Set<string>;
}

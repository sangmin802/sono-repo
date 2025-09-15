import type { TGrade } from '@/types';

/** 캘린더 모험 섬 */
export interface ICalendar {
	categoryName: string;
	contentsName: string;
	contentsIcon: string;
	minItemLevel: number;
	startTimes: string[] | null;
	location: string;
	rewardItems: {
		itemLevel: number;
		items: {
			name: string;
			icon: string;
			grade: TGrade;
			startTimes: string[];
		}[];
	}[];
}

export interface IRewardItem {
	name: string;
	icon: string;
	grade: TGrade;
	startTimes: Set<string>;
}

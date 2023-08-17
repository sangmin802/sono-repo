import type { TGrade } from '@/type';

/** 캘린더 모험 섬 */
export interface ICalendar {
	CategoryName: string;
	ContentsName: string;
	ContentsIcon: string;
	MinItemLevel: number;
	StartTimes: string[];
	Location: string;
	RewardItems: [
		{
			Name: string;
			Icon: string;
			Grade: TGrade;
			StartTimes: string[];
		}
	];
}

export interface IRewardItem {
	name: string;
	icon: string;
	grade: TGrade;
	startTimes: Set<string>;
}

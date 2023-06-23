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
			Grade: string;
			StartTimes: string[];
		}
	];
}

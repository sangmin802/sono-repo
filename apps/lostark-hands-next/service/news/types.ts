/** 공지사항 */
export interface INotice {
	Title: string;
	Date: string;
	Link: string;
	Type: string;
}

/** 이벤트 */
export interface IEvent {
	Title: string;
	Thumbnail: string;
	Link: string;
	StartDate: string;
	EndDate: string;
	RewardDate: string;
}

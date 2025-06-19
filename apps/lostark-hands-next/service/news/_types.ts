/** 공지사항 */
export interface INotice {
	title: string;
	date: string;
	link: string;
	type: string;
}

/** 이벤트 */
export interface IEvent {
	title: string;
	thumbnail: string;
	link: string;
	startDate: string;
	endDate: string;
	rewardDate: string;
}

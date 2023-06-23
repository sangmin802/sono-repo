import { type ICalendar } from '@/service/game-contents/type';

/**
 * @description convert CalendarList to client form
 */
export const calendarListSelector = (list: ICalendar[]) =>
	list.map(
		({
			CategoryName,
			ContentsName,
			ContentsIcon,
			MinItemLevel,
			StartTimes,
			Location,
			RewardItems
		}) => ({
			type: CategoryName,
			name: ContentsName,
			icon: ContentsIcon,
			badge: `${MinItemLevel}`,
			time: StartTimes,
			desc: Location,
			rewardItems: RewardItems.map(({ Name, Icon, Grade, StartTimes }) => ({
				name: Name,
				icon: Icon,
				grade: Grade,
				startTimes: StartTimes
			}))
		})
	);

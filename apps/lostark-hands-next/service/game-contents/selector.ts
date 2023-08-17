import { getDateDiff } from '@sono-repo/util/date';

import type { IRewardItem } from '@/service/game-contents/type';
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
			time: StartTimes.filter(
				(startTime) =>
					getDateDiff(new Date(startTime), new Date(), 'minutes').minutes > 0
			),
			desc: Location,
			rewardItems: RewardItems.reduce(
				(prevMap, { Name, Icon, Grade, StartTimes }) => {
					prevMap.set(Name, {
						name: Name,
						icon: Icon,
						grade: Grade,
						startTimes: new Set(StartTimes)
					});
					return prevMap;
				},
				new Map<string, IRewardItem>()
			)
		})
	);

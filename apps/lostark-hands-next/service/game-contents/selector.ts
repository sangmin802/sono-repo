import { getDateDiff } from '@sono-repo/util/date';

import type { IRewardItem } from '@/service/game-contents/type';
import { type ICalendar } from '@/service/game-contents/type';

/**
 * @description convert CalendarList to client form
 */
export const calendarListSelector = (list: ICalendar[]) =>
	list.map(
		({
			categoryName,
			contentsName,
			contentsIcon,
			minItemLevel,
			startTimes,
			location,
			rewardItems
		}) => ({
			type: categoryName,
			name: contentsName,
			icon: contentsIcon,
			badge: `${minItemLevel}`,
			time:
				startTimes?.filter(
					(startTime) =>
						getDateDiff(new Date(startTime), new Date(), 'minutes').minutes > 0
				) ?? [],
			desc: location,
			rewardItems: rewardItems.reduce(
				(prevMap, { name, icon, grade, startTimes }) => {
					prevMap.set(name, {
						name: name,
						icon: icon,
						grade: grade,
						startTimes: new Set(startTimes)
					});
					return prevMap;
				},
				new Map<string, IRewardItem>()
			)
		})
	);

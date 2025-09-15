import { getDateDiff } from '@sono-repo/util/date';

import type { ICalendar, IRewardItem } from '@/service/game-contents/_types';

export const convertCalendarData = (list: ICalendar[]) =>
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
			rewardItems: (rewardItems ?? [])
				.flatMap(({ items }) => items)
				.reduce((prevMap, { name, icon, grade, startTimes }) => {
					prevMap.set(name, {
						name: name,
						icon: icon,
						grade: grade,
						startTimes: new Set(startTimes)
					});
					return prevMap;
				}, new Map<string, IRewardItem>())
		})
	);

export const getValidRewardList = (
	rewardMap: Map<string, IRewardItem>,
	time: string
) =>
	Array.from(rewardMap)
		.flatMap(([, val]) => val)
		.filter(({ startTimes }) => !startTimes.size || startTimes.has(time));

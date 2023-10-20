import { useCallback, useState } from 'react';

import { getDateDiff, getTimeUnit } from '@sono-repo/util/date';

const useFilterTimerList = <T extends { time: string[] }>(list: T[]) => {
	const [timerList, setTimerList] = useState(list);

	const onReFilter = useCallback(() => {
		setTimerList((prevList) =>
			prevList.map((item) => ({
				...item,
				time: item.time.filter(
					(startTime) =>
						getDateDiff(new Date(startTime), new Date(), 'minutes').minutes > 0
				)
			}))
		);
	}, []);

	const filteredTimerList = timerList
		.filter(
			({ time: [firstTime] }) =>
				getTimeUnit(new Date(), 'day') ===
				getTimeUnit(new Date(firstTime), 'day')
		)
		.sort(({ time: [aTime] }, { time: [bTime] }) =>
			new Date(bTime).getTime() > new Date(aTime).getTime() ? -1 : 0
		);

	return {
		timerList: filteredTimerList,
		onReFilter
	};
};

export default useFilterTimerList;

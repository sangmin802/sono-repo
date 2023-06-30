'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';

import { getDateDiff, getTimeUnit } from '@sono-repo/util/date';

import Timer from './timer';

interface ITimerGridProps<T> {
	timerList: {
		name: string;
		icon: string;
		time: string[];
		badge?: string;
		desc?: string;
	}[];
	render?: (props: T) => JSX.Element;
	emptyFallback?: () => JSX.Element;
}

const TimerGrid = <T,>({
	timerList: initList,
	render,
	emptyFallback
}: ITimerGridProps<T>) => {
	const [timerList, setTimerList] = useState(initList);

	const handleResetEndtime = useCallback(() => {
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

	const filteredTimerList = useMemo(
		() =>
			timerList
				.filter(
					({ time: [firstTime] }) =>
						getTimeUnit(new Date(), 'day') ===
						getTimeUnit(new Date(firstTime), 'day')
				)
				.sort(({ time: [aTime] }, { time: [bTime] }) =>
					new Date(bTime).getTime() > new Date(aTime).getTime() ? -1 : 0
				),
		[timerList]
	);

	if (!filteredTimerList.length) return emptyFallback?.();

	return (
		<div className="grid grid-cols-2 gap-[8px] lg:grid-cols-5">
			{filteredTimerList.map((item, idx) => (
				<Timer
					className="flex flex-col items-center rounded-[4px] border border-gray-400 p-[8px]"
					key={`${item.name}-${idx}`}
					endTime={new Date(item.time[0]).getTime()}
					focusOption={{
						focusTime: 1000 * 60 * 10,
						className: '!border-orange-400'
					}}
					onCallback={handleResetEndtime}
				>
					<div className="w-full">
						<div className="min-w-0 truncate font-bold">{item.name}</div>
						<Image
							className="mr-[8px] w-[40%] shrink-0 overflow-hidden rounded-[4px]"
							src={item.icon}
							width={100}
							height={100}
							alt={item.name}
						/>
					</div>
				</Timer>
			))}
		</div>
	);
};

export default TimerGrid;

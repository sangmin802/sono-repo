'use client';

interface ITimerGridProps<T> {
	timerList: {
		name: string;
		icon: string;
		time: string[];
		badge?: string;
		desc?: string;
	}[];
	render?: (props: T) => JSX.Element;
}

const TimerGrid = <T,>({ timerList, render }: ITimerGridProps<T>) => {
	return <>{render?.(timerList[0].renderProps)}</>;
};

export default TimerGrid;

'use client';

import cn from 'classnames';

import { addZero } from '@sono-repo/util/number';

interface ITimeUnitProps {
	className?: string;
	time: number;
	hour: number;
	min: number;
	sec: number;
}

const TimeUnit = ({ time, hour, min, sec }: ITimeUnitProps) => {
	const isHasRest = hour + min + sec !== 0;
	const isReady = time && time < 1000 * 60 * 10;

	return (
		<div className={cn(isReady ? 'text-orange-500' : 'text-gray-400')}>
			{isHasRest ? `${addZero(hour)}:${addZero(min)}:${addZero(sec)}` : '-'}
		</div>
	);
};

export default TimeUnit;

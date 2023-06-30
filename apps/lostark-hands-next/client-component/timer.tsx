'use client';

import { type PropsWithChildren, useEffect, useState } from 'react';
import cn from 'classnames';

import { getTime } from '@sono-repo/util/date';

interface ITimerProps {
	className?: string;
	endTime: number;
	focusOption?: {
		className: string;
		focusTime: number;
	};
	onCallback?: () => void;
}

/**
 * Timer
 * @param endTime: number
 * @param onCallback: memoized callback
 */
const Timer = ({
	className,
	endTime,
	focusOption,
	children,
	onCallback
}: PropsWithChildren<ITimerProps>) => {
	const [restTime, setRestTime] = useState<number>();

	useEffect(() => {
		let time = new Date().getTime();

		// raf event
		const event = () => {
			const now = new Date().getTime();

			if (now >= endTime) {
				onCallback?.();
				return;
			}

			if (now - 1000 >= time) {
				setRestTime((prevTime) => prevTime && prevTime - 1000);
				time = now;
			}

			requestAnimationFrame(event);
		};

		const frame = requestAnimationFrame(event);

		// set init state
		setRestTime(endTime - new Date().getTime());

		return () => {
			cancelAnimationFrame(frame);
		};
	}, [endTime, onCallback]);

	const isRestTimeSettled = restTime !== undefined;

	return (
		<div
			className={cn(
				className,
				focusOption &&
					isRestTimeSettled && {
						[focusOption.className]: restTime <= focusOption.focusTime
					}
			)}
		>
			{children}
			<div>{isRestTimeSettled ? getTime(restTime) : '-'}</div>
		</div>
	);
};

export default Timer;

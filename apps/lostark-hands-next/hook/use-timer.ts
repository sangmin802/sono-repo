import { useEffect, useState } from 'react';

/**
 * Returns the time remaining per second based on the entered end time
 * @param endTime: number (getTime)
 * @param onCallback must be memoized
 */
const useTimer = (endTime: number, onCallback?: () => void) => {
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

	return restTime;
};

export default useTimer;

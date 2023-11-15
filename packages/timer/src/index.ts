import { useEffect, useRef, useState } from 'react';

const SEC = 1000;
const MIN = SEC * 60;
const HOUR = MIN * 60;

const getTimeUnit = (time: number) => {
	const hour = Math.floor(time / HOUR);
	const min = Math.floor((time % HOUR) / MIN);
	const sec = Math.floor((time % MIN) / SEC);

	return { hour, min, sec };
};

/**
 * Returns the time remaining per second based on the entered end time
 * @param endTime number (getTime)
 * @param resetKey create new timer RAF
 * @param onCallback action after timer ends
 * @param onWindowFocus on windowFocus
 */
const useTimer = ({
	endTime,
	resetKey,
	onCallback,
	onWindowFocus
}: {
	endTime: number;
	resetKey?: unknown;
	onCallback?: () => void;
	onWindowFocus?: () => void;
}) => {
	const [restTime, setRestTime] = useState<number>(0);
	const frame = useRef(0);
	const stringifyKey = JSON.stringify(resetKey);

	useEffect(() => {
		if (!endTime) return;

		let time = Math.floor(new Date().getTime() / 1000) * 1000;

		// raf event
		const event = () => {
			const now = Math.floor(new Date().getTime() / 1000) * 1000;

			if (now >= Math.floor(endTime / 1000) * 1000) {
				onCallback?.();
				return;
			}

			if (now - 1000 >= time) {
				setRestTime((prevTime) => prevTime && prevTime - 1000);
				time = now;
			}

			frame.current = requestAnimationFrame(event);
		};

		// start raf
		frame.current = requestAnimationFrame(event);

		// set init state
		setRestTime(endTime - time);

		return () => {
			cancelAnimationFrame(frame.current);
		};
	}, [endTime, stringifyKey, onCallback]);

	useEffect(() => {
		const event = () => onWindowFocus?.();

		window.addEventListener('focus', event);

		return () => {
			window.removeEventListener('focus', event);
		};
	}, [onWindowFocus]);

	return { time: restTime, ...getTimeUnit(restTime) };
};

export default useTimer;

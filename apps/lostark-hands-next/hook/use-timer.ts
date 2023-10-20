import { useEffect, useRef, useState } from 'react';

/**
 * Returns the time remaining per second based on the entered end time
 * @param endTime number (getTime)
 * @param resetKey: resetKey
 * @param onCallback must be memoized
 */
const useTimer = ({
	endTime,
	resetKey,
	onCallback
}: {
	endTime?: number;
	resetKey?: unknown;
	onCallback: () => void;
}) => {
	const [restTime, setRestTime] = useState<number>();
	const frame = useRef(0);

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

			if (document.hidden) {
				console.log('비활성화');
			}
		};

		// start raf
		frame.current = requestAnimationFrame(event);

		// set init state
		setRestTime(endTime - time);

		return () => {
			cancelAnimationFrame(frame.current);
		};
	}, [endTime, resetKey, onCallback]);

	useEffect(() => {
		window.addEventListener('focus', onCallback);

		return () => {
			window.removeEventListener('focus', onCallback);
		};
	}, [onCallback]);

	return restTime;
};

export default useTimer;

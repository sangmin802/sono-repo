import { useSyncExternalStore } from 'react';

type SubscribeListener = () => void;

const store = (function () {
	let count = 0;
	let subscribeListeners: SubscribeListener | null = null;

	const onSubscribe = (listener: SubscribeListener) => {
		subscribeListeners = listener;
		return () => {
			subscribeListeners = null;
		};
	};

	const triggerRender = () => {
		subscribeListeners?.();
	};

	const addCount = () => {
		count += 1;
		triggerRender();
	};

	const setCount = (newCount: number) => {
		count = newCount;
		triggerRender();
	};

	const getCount = () => {
		return count;
	};

	return {
		onSubscribe,
		addCount,
		setCount,
		getCount
	};
})();

/** 일반 변수일 경우 */
// let count = 0;

const PENDING_MAP = new Map<string, Promise<unknown>>();

const addCountPromise = (pendingKey: string) => {
	if (PENDING_MAP.has(pendingKey)) return PENDING_MAP.get(pendingKey);

	const promise = new Promise((resolve) => {
		setTimeout(() => {
			PENDING_MAP.delete(pendingKey);

			/** state 사용할 경우 */
			store.addCount();

			/** 일반 변수일 경우 */
			// count++;

			resolve(true);
		}, 3000);
	});

	PENDING_MAP.set(pendingKey, promise);

	return promise;
};

const ThrowPromiseTest = () => {
	/** state 사용할 경우 */
	const count = useSyncExternalStore(store.onSubscribe, store.getCount);
	console.log('중단 이전', count);

	if (count === 0) {
		throw addCountPromise('THROW_PROMISE_TEST');
	}

	console.log('중단 이후', count);

	return <div>자식 {count}</div>;
};

export default ThrowPromiseTest;

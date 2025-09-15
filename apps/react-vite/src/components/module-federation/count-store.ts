type SubscribeListener = () => void;

const createCountStore = () => {
	let count = 0;
	const subscribeListeners = new Set<SubscribeListener>();

	const onSubscribe = (listener: SubscribeListener) => {
		subscribeListeners.add(listener);
		return () => subscribeListeners.delete(listener);
	};

	const triggerRender = () => {
		subscribeListeners.forEach((listener) => listener());
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
};

const countStore = createCountStore();

export default countStore;

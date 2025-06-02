import { useSyncExternalStore } from 'react';

import countStore from './count-store';

const useCountStore = () => {
	const count = useSyncExternalStore(
		countStore.onSubscribe,
		countStore.getCount
	);

	return {
		count,
		addCount: countStore.addCount,
		setCount: countStore.setCount
	};
};

export default useCountStore;

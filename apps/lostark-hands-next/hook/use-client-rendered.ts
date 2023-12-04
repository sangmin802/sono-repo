import { useEffect, useState } from 'react';

/**
 * check cliend side rendered
 */
const useClientRendered = () => {
	const [state, setState] = useState(false);

	useEffect(() => {
		setState(true);
	}, []);

	return state;
};

export default useClientRendered;

import { useEffect, useState } from 'react';

const ExampleOne = () => {
	const [state, setState] = useState(0);
	const basicObject = {
		id: 1
	};
	const stateObject = {
		id: state,
		name: '이름'
	};

	useEffect(() => {
		console.log('basicObject render', basicObject);
	}, [basicObject]);

	useEffect(() => {
		console.log('stateObject render', stateObject);
	}, [stateObject]);

	return (
		<div>
			<button onClick={() => setState(state + 1)}>test1 add</button>
		</div>
	);
};

export default ExampleOne;

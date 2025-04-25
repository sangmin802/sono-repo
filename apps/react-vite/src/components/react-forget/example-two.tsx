import { useEffect, useMemo, useState } from 'react';

const ExampleTwo = () => {
	const [state, setState] = useState({ name: 'test2', count: 0 });

	const memoized = useMemo(() => {
		console.log('state 변경으로 memo call', state);
		return { memoName: state.name, key: 'memo' };
	}, [state]);

	useEffect(() => {
		console.log('memo로 계산된 값 변경으로 useEffect call', memoized);
	}, [memoized]);

	return (
		<div>
			<button
				onClick={() => setState((prev) => ({ ...prev, count: prev.count++ }))}
			>
				{memoized.memoName} add
			</button>
			<Child data={memoized} />
		</div>
	);
};
const Child = ({ data }: { data: { memoName: string; key: string } }) => {
	console.log('Test2Child rerender', data);

	return <div>test2 child</div>;
};

export default ExampleTwo;

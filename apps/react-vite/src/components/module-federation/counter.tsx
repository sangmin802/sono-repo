import ReactDOM from 'react-dom/client';

import useCountStore from './use-count-store';

const Counter = () => {
	const { count, addCount, setCount } = useCountStore();

	return (
		<div className="px-[40px]">
			<h2>React Remote</h2>
			<button
				className="block"
				onClick={() => addCount()}
			>
				add Count
			</button>
			<button
				className="block"
				onClick={() => setCount(Math.ceil(Math.random() * 100))}
			>
				set Random Count
			</button>
			<div className="text-primary-01">{count}</div>
		</div>
	);
};

const createCounter = (rootId: string) => {
	ReactDOM.createRoot(document.getElementById(rootId)!).render(<Counter />);
};

export default createCounter;

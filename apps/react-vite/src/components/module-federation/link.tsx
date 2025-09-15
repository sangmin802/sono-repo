import ReactDOM from 'react-dom/client';

import useCountStore from './use-count-store';

interface LinkProps {
	onMoveNew: () => void;
}

const Link = ({ onMoveNew }: LinkProps) => {
	const { count } = useCountStore();

	return (
		<div className="px-[40px]">
			<h2>React Remote</h2>
			<div>current count: {count}</div>
			<button onClick={onMoveNew}>Move New</button>
		</div>
	);
};

export const createLink = (rootId: string, onMoveNew: () => void) => {
	ReactDOM.createRoot(document.getElementById(rootId)!).render(
		<Link onMoveNew={onMoveNew} />
	);
};

export default createLink;

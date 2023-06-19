'use client';

import { type FC } from 'react';

interface IErrorProps {
	reset: () => void;
}

const Error: FC<IErrorProps> = ({ reset }) => {
	return (
		<div>
			<div>Error!</div>
			<button onClick={reset}>retry</button>
		</div>
	);
};

export default Error;

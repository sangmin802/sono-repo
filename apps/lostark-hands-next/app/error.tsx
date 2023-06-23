'use client';

interface IErrorProps {
	reset: () => void;
}

const Error = ({ reset }: IErrorProps) => {
	return (
		<div>
			<div>Error!</div>
			<button onClick={reset}>retry</button>
		</div>
	);
};

export default Error;

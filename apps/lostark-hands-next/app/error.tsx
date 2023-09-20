'use client';

interface IErrorProps {
	reset: () => void;
}

const Error = ({ reset, ...props }: IErrorProps) => {
	console.log(props, '여기 오지??');

	return (
		<div>
			<div>Error!</div>
			<button onClick={reset}>retry</button>
		</div>
	);
};

export default Error;

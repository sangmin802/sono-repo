import { useSuspenseQuery } from '@tanstack/react-query';

interface SuspenseQueryChildProps {
	index: number;
}

const SuspenseQueryChild = ({ index }: SuspenseQueryChildProps) => {
	console.log(`SuspenseQueryChild ${index} render before suspense`);
	useSuspensePromiseQuery(index);
	console.log(`SuspenseQueryChild ${index} render after suspense`);

	return <div>SuspenseQueryChild {index}</div>;
};

const useSuspensePromiseQuery = (index: number) =>
	useSuspenseQuery({
		queryKey: ['SUSPENSE_PROMISE_QUERY', index],
		queryFn: () =>
			new Promise((resolve, reject) => {
				// console.log(`${index} Promise Call`);
				setTimeout(() => {
					// console.log(`${index} Promise Done`);
					resolve(index);
					// reject('에러!');
				}, index * 1000);
			})
	});

export default SuspenseQueryChild;

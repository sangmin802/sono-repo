import { useSuspenseQuery } from '@tanstack/react-query';

interface SuspenseQueryChildProps {
	index: number;
}

const SuspenseQueryChild = ({ index }: SuspenseQueryChildProps) => {
	console.log(`SuspenseQueryChild ${index} render before suspense`);

	useSuspensePromiseQuery(index);

	return <div>SuspenseQueryChild {index}</div>;
};

const useSuspensePromiseQuery = (index: number) =>
	useSuspenseQuery({
		queryKey: ['SUSPENSE_PROMISE_QUERY', index],
		queryFn: () =>
			new Promise((resolve) => {
				setTimeout(() => {
					resolve(index);
				}, 2000);
			})
	});

export default SuspenseQueryChild;

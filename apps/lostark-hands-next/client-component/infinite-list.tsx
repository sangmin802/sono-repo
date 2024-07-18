'use client';

import {
	Children,
	cloneElement,
	type HTMLAttributes,
	type ReactElement,
	useEffect,
	useRef
} from 'react';

interface InfiniteListProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement[];
	isFetching: boolean;
	isHasNextPage: boolean;
	onFetch: () => void;
}

const InfiniteList = ({
	children,
	isFetching,
	isHasNextPage,
	onFetch,
	...props
}: InfiniteListProps) => {
	const ioRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ref = ioRef.current;

		if (!ref) return;

		const observer = new IntersectionObserver(
			([{ isIntersecting }]) => {
				if (!isIntersecting) return;
				if (!isHasNextPage) return;
				if (isFetching) return;

				onFetch();
			},
			{ rootMargin: '0px 0px 200% 0px' }
		);

		observer.observe(ref);

		return () => {
			observer.unobserve(ref);
		};
	}, [onFetch, isFetching, isHasNextPage]);

	return (
		<div {...props}>
			{Children.map(children, (child, idx) =>
				cloneElement(child, { key: idx })
			)}
			<div ref={ioRef} />
		</div>
	);
};

export default InfiniteList;

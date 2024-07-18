'use client';

import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ReactNode,
	useEffect,
	useRef,
	useState
} from 'react';
import cn from 'classnames';

type IStickyElementProps<T extends ElementType> = {
	className?: string;
	activeClassName?: string;
	as?: T;
	top?: number;
	children?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const StickyElement = <T extends ElementType>({
	className,
	activeClassName,
	as,
	top = 0,
	children,
	...props
}: IStickyElementProps<T>) => {
	const ioRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);

	const Tag = as ?? 'div';

	useEffect(() => {
		if (!ioRef.current) return;
		const el = ioRef.current;

		const observer = new IntersectionObserver(
			(entry) => {
				setIsScrolled(!entry[0].isIntersecting);
			},
			{ rootMargin: `-${top}px` }
		);

		observer.observe(el);

		return () => observer.unobserve(el);
	}, [top]);

	return (
		<>
			<div
				className="self-start"
				ref={ioRef}
			/>
			<Tag
				style={{ top }}
				className={cn(className, 'sticky transition duration-[.3s] ease-out', {
					[`${activeClassName}`]: isScrolled && activeClassName
				})}
				{...props}
			>
				{children}
			</Tag>
		</>
	);
};

export const StickyElementSkeleton = <T extends ElementType>({
	as,
	top,
	className,
	children
}: {
	as?: T;
	top?: number;
	className?: string;
	children?: ReactNode;
}) => {
	const Tag = as ?? 'div';

	return (
		<>
			<div className="self-start" />
			<Tag
				style={{ top }}
				className={cn(
					className,
					'sticky bg-main-10 transition duration-[.3s] ease-out'
				)}
			>
				{children}
			</Tag>
		</>
	);
};

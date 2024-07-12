import {
	type ComponentPropsWithoutRef,
	type ElementType,
	useEffect,
	useRef,
	useState
} from 'react';
import cn from 'classnames';

import emptyImage from '../assets/emoticon_8.png';

type ImageProps<T extends ElementType> = {
	className?: string;
	loadingClassName?: string;
	as?: T;
} & ComponentPropsWithoutRef<T>;

export const Image = <T extends ElementType>({
	className,
	loadingClassName,
	as,
	src,
	...props
}: ImageProps<T>) => {
	const [isLoad, setIsLoad] = useState(false);
	const [isError, setIsError] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);
	const Tag = as ?? 'img';

	const handleImageLoad = () => {
		setIsLoad(true);
	};

	const handleImageError = () => {
		setIsError(true);
	};

	useEffect(() => {
		if (!imgRef.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				const target = entry.target as HTMLImageElement;
				const src = target.dataset.src;

				if (!src) return;

				target.src = src;
			}
		});

		observer.observe(imgRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div
			className={cn(
				className,
				loadingClassName && !isLoad && !isError && loadingClassName
			)}
		>
			<Tag
				className={cn('size-full object-cover duration-300', {
					'opacity-100': isLoad && !isError,
					'opacity-0': !isLoad || isError
				})}
				data-src={src}
				src={isLoad ? src : emptyImage}
				ref={imgRef}
				onLoad={handleImageLoad}
				onError={handleImageError}
				{...props}
			/>
		</div>
	);
};

export default Image;

import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
	const isLg = useMediaQuery({
		query: '(min-width: 1024px)'
	});
	const isMd = useMediaQuery({
		query: '(min-width: 768px)'
	});

	return { isLg, isMd };
};

export default useResponsive;

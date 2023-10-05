import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
	const isLg = useMediaQuery({
		query: '(min-width: 1024px)'
	});

	return { isLg };
};

export default useResponsive;

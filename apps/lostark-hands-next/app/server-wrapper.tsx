import type { ReactElement } from 'react';

interface IServerWrapperProps<BasicReturnType> {
	apiPromise: Promise<BasicReturnType>;
}

type TConditional<BasicReturnType, SelectorReturnType> =
	| {
			render: (props: SelectorReturnType) => ReactElement | null;
			selector: (props: BasicReturnType) => SelectorReturnType;
	  }
	| {
			render: (props: BasicReturnType) => ReactElement | null;
			selector?: undefined;
	  };

/**
 * streaming 혹은, ppr 지원 시 Suspense로 감싸야 할 경우 사용될 서버 컴포넌트
 */
const ServerWrapper = async <BasicReturnType, SelectorReturnType>({
	apiPromise,
	selector,
	render
}: IServerWrapperProps<BasicReturnType> &
	TConditional<BasicReturnType, SelectorReturnType>) => {
	const data = await apiPromise;

	if (typeof selector === 'undefined') {
		return render(data);
	}

	return render(selector(data));
};

export default ServerWrapper;

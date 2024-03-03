import type { PropsWithChildren } from 'react';
import {
	createContext,
	type Dispatch,
	type ReactElement,
	type SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';
import cn from 'classnames';

import Arrow from './arrow';

type TAction = 'OPEN' | 'CLOSE';
type TArrowMode = 'DARK' | 'WHITE';

interface IAccordionProps {
	className?: string;
	children: ReactElement[];
	onChange?: (type: TAction) => void;
}

interface ISummaryProps extends PropsWithChildren {
	className?: string;
	arrowMode?: TArrowMode;
}

interface IContentProps extends PropsWithChildren {
	className?: string;
}

const errorMsg = 'Accordion 컴포넌트 내부에서 사용되어야 합니다.';

const StateContext = createContext<boolean | undefined>(undefined);

const DispatchContext = createContext<
	Dispatch<SetStateAction<boolean>> | undefined
>(undefined);

const useStateContext = () => {
	const state = useContext(StateContext);
	if (state === undefined) throw new Error(errorMsg);
	return state;
};

const useDispatchContext = () => {
	const dispatch = useContext(DispatchContext);
	if (dispatch === undefined) throw new Error(errorMsg);
	return dispatch;
};

const Accordion = ({ className, children, onChange }: IAccordionProps) => {
	const [status, setStatus] = useState(false);

	useEffect(() => {
		onChange?.(status ? 'CLOSE' : 'OPEN');
	}, [status, onChange]);

	return (
		<StateContext.Provider value={status}>
			<DispatchContext.Provider value={setStatus}>
				<div className={className}>{children}</div>
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

const Summary = ({ className, children, arrowMode }: ISummaryProps) => {
	const state = useStateContext();
	const dispatch = useDispatchContext();

	const handleToggleSummary = () => {
		dispatch((prev) => !prev);
	};

	return (
		<div
			className={cn(
				'flex cursor-pointer items-center justify-between space-x-[6px] px-[4px]',
				className
			)}
			onClick={handleToggleSummary}
		>
			<div className="text-[16px] text-inherit">{children}</div>
			<Arrow
				className={cn('duration-200', { 'rotate-180': state })}
				fill={arrowMode === 'WHITE' ? '#efefef' : '#222'}
			/>
		</div>
	);
};

const Content = ({ className, children }: IContentProps) => {
	const state = useStateContext();

	return (
		<div
			className={cn(
				'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out',
				{ 'grid-rows-[1fr]': state }
			)}
		>
			<div className="overflow-hidden">
				<div className={cn('px-[6px] py-[10px]', className)}>{children}</div>
			</div>
		</div>
	);
};

Accordion.Summary = Summary;
Accordion.Content = Content;

export default Accordion;

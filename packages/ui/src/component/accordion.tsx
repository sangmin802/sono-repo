import type { PropsWithChildren, ReactNode } from 'react';
import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';
import cn from 'classnames';

import Arrow from './arrow';

type TAction = 'OPEN' | 'CLOSE';
type TArrowMode = 'DARK' | 'WHITE';
type TId = number | string;

interface IContainerProps {
	className?: string;
	children: ReactNode;
	id: TId;
	onChange?: (type: TAction) => void;
}

interface ISummaryProps extends PropsWithChildren {
	className?: string;
	arrowMode?: TArrowMode;
}

interface IContentProps extends PropsWithChildren {
	className?: string;
	onClick?: () => void;
}

const errorMsg = 'Accordion 컴포넌트 내부에서 사용되어야 합니다.';

const StateContext = createContext<TId | undefined>(undefined);
const DispatchContext = createContext<
	Dispatch<SetStateAction<TId>> | undefined
>(undefined);
const IdContext = createContext<TId | undefined>(undefined);

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

const useIdContext = () => {
	const id = useContext(IdContext);
	if (id === undefined) throw new Error(errorMsg);
	return id;
};

const Accordion = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState<TId>(0);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={setState}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

const Container = ({ id, className, children, onChange }: IContainerProps) => {
	const state = useStateContext();

	useEffect(() => {
		onChange?.(state ? 'OPEN' : 'CLOSE');
	}, [state, onChange]);

	return (
		<IdContext.Provider value={id}>
			<div className={className}>{children}</div>
		</IdContext.Provider>
	);
};

const Summary = ({
	className,
	children,
	arrowMode = 'WHITE'
}: ISummaryProps) => {
	const state = useStateContext();
	const id = useIdContext();
	const dispatch = useDispatchContext();

	const handleToggleSummary = () => {
		dispatch((prevId) => (prevId === id ? 0 : id));
	};

	const isSelected = state === id;

	return (
		<div
			className={
				'flex w-full cursor-pointer items-center justify-between space-x-[6px] px-[4px]'
			}
			onClick={handleToggleSummary}
		>
			<div className={cn('text-inherit', className)}>{children}</div>
			<Arrow
				className={cn('duration-200', { 'rotate-180': isSelected })}
				fill={arrowMode === 'WHITE' ? '#efefef' : '#222'}
			/>
		</div>
	);
};

const Content = ({ className, children, onClick }: IContentProps) => {
	const state = useStateContext();
	const id = useIdContext();

	return (
		<div
			className={cn(
				'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out',
				{ 'grid-rows-[1fr]': state === id }
			)}
			onClick={onClick}
		>
			<div className="overflow-hidden">
				<div className={cn('px-[6px] py-[10px]', className)}>{children}</div>
			</div>
		</div>
	);
};

Accordion.Container = Container;
Accordion.Summary = Summary;
Accordion.Content = Content;

export default Accordion;

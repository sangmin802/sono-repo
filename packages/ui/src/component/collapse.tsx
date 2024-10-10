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

interface ICollapseProps {
	className?: string;
	children: ReactNode;
	id: TId;
	isInitOpen?: boolean;
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

const errorMsg = 'Collapse 컴포넌트 내부에서 사용되어야 합니다.';

const StateContext = createContext<TId | undefined>(undefined);
const DispatchContext = createContext<
	Dispatch<SetStateAction<TId>> | undefined
>(undefined);
const IdContext = createContext<TId | undefined>(undefined);

const useStateContext = (_state?: TId) => {
	const state = useContext(StateContext);
	if (_state === undefined && state === undefined) throw new Error(errorMsg);
	return state ?? _state;
};

const useDispatchContext = (_dispatch?: Dispatch<SetStateAction<TId>>) => {
	const dispatch = useContext(DispatchContext);
	const returnDispatch = dispatch ?? _dispatch;
	if (returnDispatch === undefined) throw new Error(errorMsg);
	return returnDispatch;
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

const Collapse = ({
	id,
	isInitOpen,
	className,
	children,
	onChange
}: ICollapseProps) => {
	const [collapseState, setCollapseState] = useState<TId>(isInitOpen ? id : 0);
	const state = useStateContext(collapseState);
	const setState = useDispatchContext(setCollapseState);

	useEffect(() => {
		onChange?.(state === id ? 'OPEN' : 'CLOSE');
	}, [state, id, onChange]);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={setState}>
				<IdContext.Provider value={id}>
					<div className={className}>{children}</div>
				</IdContext.Provider>
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

const Summary = ({
	className,
	children,
	arrowMode = 'WHITE'
}: ISummaryProps) => {
	const [isClientRendered, setIsClientRendered] = useState(false);
	const state = useStateContext();
	const id = useIdContext();
	const dispatch = useDispatchContext();

	const handleToggleSummary = () => {
		dispatch((prevId) => (prevId === id ? 0 : id));
	};

	const isSelected = state === id;

	useEffect(() => {
		setIsClientRendered(true);
	}, []);

	return (
		<div
			className={
				'flex w-full cursor-pointer items-center justify-between space-x-[6px] px-[4px]'
			}
			onClick={handleToggleSummary}
		>
			<div className={cn('text-inherit', className)}>{children}</div>
			{isClientRendered && (
				<Arrow
					className={cn('duration-200', { 'rotate-180': isSelected })}
					fill={arrowMode === 'WHITE' ? '#efefef' : '#222'}
				/>
			)}
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

Collapse.Summary = Summary;
Collapse.Content = Content;

export { Collapse, Accordion };

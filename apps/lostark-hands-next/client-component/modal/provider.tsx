'use client';

import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

import type {
	IModalDispatchContext,
	IModalStateContext
} from '@/client-component/modal/types';

type TModalState = IModalStateContext | undefined;
type TModalDispatch = IModalDispatchContext | undefined;

const ModalStateContext = createContext<TModalState>(undefined);
const ModalDispatchContext = createContext<TModalDispatch>(undefined);

export const useModalState = () => {
	const modalState = useContext(ModalStateContext);

	if (!modalState) {
		throw new Error('useModalState must be used inside the ModalStateProvider');
	}

	return modalState;
};

export const useModalDispatch = () => {
	const modalDispatch = useContext(ModalDispatchContext);

	if (!modalDispatch) {
		throw new Error(
			'useModalDispatch must be used inside the ModalDispatchProvider'
		);
	}

	return modalDispatch;
};

const ModalProvider = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState<TModalState>({
		open: false,
		modalItem: null
	});

	const modalDispatcher = useMemo<IModalDispatchContext>(
		() => ({
			onCloseModal: () =>
				setState((prev) => (prev ? { ...prev, open: false } : prev)),
			onOpenModal: (modalItem) =>
				setState((prev) => (prev ? { open: true, modalItem } : prev))
		}),
		[]
	);

	return (
		<ModalStateContext.Provider value={state}>
			<ModalDispatchContext.Provider value={modalDispatcher}>
				{children}
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	);
};

export default ModalProvider;

import { type FC, Fragment, Suspense, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';

import { useModal } from './use-modal';

const MODAL_ROOT_CLASS = 'ssm-modal-root';

const ModalRoot: FC = () => {
	const [modalRootEl, setModalRootEl] = useState(
		document.body.getElementsByClassName(MODAL_ROOT_CLASS)[0]
	);

	const {
		isOpen,
		component: Component,
		props,
		contextProvider: ContextProvider = Fragment,
		contextProviderProps,
		onResolve,
		onReject,
		onCloseModal
	} = useModal();

	useEffect(() => {
		if (modalRootEl) return;

		const newModalRoot = document.createElement('div');
		newModalRoot.setAttribute('class', MODAL_ROOT_CLASS);

		document.body.appendChild(newModalRoot);
		setModalRootEl(newModalRoot);
	}, [modalRootEl]);

	if (!modalRootEl) return null;

	return (
		<>
			{createPortal(
				<AnimatePresence>
					{isOpen && Component && (
						<Motion.div
							className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
							onClick={onCloseModal}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Suspense>
								<ContextProvider {...contextProviderProps}>
									<Component
										{...props}
										onResolve={onResolve}
										onReject={onReject}
									/>
								</ContextProvider>
							</Suspense>
						</Motion.div>
					)}
				</AnimatePresence>,
				modalRootEl
			)}
		</>
	);
};

export default ModalRoot;

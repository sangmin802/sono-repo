import type { PropsWithChildren } from 'react';
import { Suspense, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion as Motion } from 'framer-motion';

interface ModalProps extends PropsWithChildren {
	isOpen?: boolean;
	onClickOutside: () => void;
}

const MODAL_ROOT_CLASS = 'sm-modal-root';

const Modal = ({ isOpen, children, onClickOutside }: ModalProps) => {
	const [modalRootEl, setModalRootEl] = useState(
		document.body.getElementsByClassName(MODAL_ROOT_CLASS)[0]
	);

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
					{isOpen && children && (
						<Motion.div
							className="ui:fixed ui:inset-0 ui:z-[100] ui:flex ui:items-center ui:justify-center ui:bg-black/70"
							onClick={onClickOutside}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Suspense>{children}</Suspense>
						</Motion.div>
					)}
				</AnimatePresence>,
				modalRootEl
			)}
		</>
	);
};

export default Modal;

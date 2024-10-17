// import { type FC, Fragment, Suspense, useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';

// import { useModal } from '@/hooks';

// const MODAL_ROOT_CLASS = 'ssm-modal-root';

// const ModalRoot: FC = () => {
// 	const [modalRootEl, setModalRootEl] = useState(
// 		document.body.getElementsByClassName(MODAL_ROOT_CLASS)[0]
// 	);

// 	const {
// 		isOpen,
// 		component: Component,
// 		props,
// 		contextProvider: ContextProvider = Fragment,
// 		contextProviderProps,
// 		onResolve,
// 		onReject
// 	} = useModal();

// 	useEffect(() => {
// 		if (modalRootEl) return;

// 		const newModalRoot = document.createElement('div');
// 		newModalRoot.setAttribute('class', MODAL_ROOT_CLASS);

// 		document.body.appendChild(newModalRoot);
// 		setModalRootEl(newModalRoot);
// 	}, [modalRootEl]);

// 	return (
// 		<>
// 			{isOpen &&
// 				Component &&
// 				createPortal(
// 					<Suspense>
// 						<ContextProvider {...contextProviderProps}>
// 							<Component
// 								{...props}
// 								onResolve={onResolve}
// 								onReject={onReject}
// 							/>
// 						</ContextProvider>
// 					</Suspense>,
// 					modalRootEl
// 				)}
// 		</>
// 	);
// };

// export default ModalRoot;

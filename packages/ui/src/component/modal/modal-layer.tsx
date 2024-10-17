// import type { ReactNode } from 'react';
// import { type FC, useRef } from 'react';
// import type { SsmLayerPopupProps } from '@dealicious/design-system-react';
// import { SsmLayerPopup } from '@dealicious/design-system-react';
// import { motion } from 'framer-motion';

// import { useModal } from '@/hooks';

// import type { SsmOverlayExpose } from '../window-func/ssm-overlay';
// import SsmOverlay from '../window-func/ssm-overlay';

// /**
//  * @description
//  * Custom Handler 할당 시, onResolve 또는 onReject 이후 원하는 시기에 모달을 닫을 수 있도록 cb 전달
//  */
// type Handler = ((closeModal: () => void) => void) | undefined;

// interface ModalLayerProps
// 	extends Omit<SsmLayerPopupProps, 'onClose' | 'onCancel' | 'onConfirm'> {
// 	children: ReactNode;
// 	onClickOutside?: Handler;
// 	onClose?: Handler;
// 	onCancel?: Handler;
// 	onConfirm?: Handler;
// }

// const ModalLayer: FC<ModalLayerProps> = ({
// 	children,
// 	onClose,
// 	onCancel,
// 	onConfirm,
// 	onClickOutside,
// 	...ssmLayerPopupProps
// }) => {
// 	const { closeModal, onReject } = useModal();
// 	const overlayRef = useRef<SsmOverlayExpose>(null);

// 	/**
// 	 * 1. 내부 SsmOverlay Framer에서 overlayRef.current.close를 통해 children 비활성화
// 	 * 2. onExitComplete 트리거를 통해 closeModal 호출
// 	 */
// 	const handleCloseOverlay = () => {
// 		if (!overlayRef?.current) {
// 			console.warn('overlayRef가 존재하지 않습니다.');
// 			return;
// 		}

// 		overlayRef.current.close();
// 	};

// 	const handleModalAction = (handler: Handler) => () => {
// 		if (handler) handler(handleCloseOverlay);
// 		else {
// 			onReject?.();
// 			handleCloseOverlay();
// 		}
// 	};

// 	return (
// 		<SsmOverlay
// 			ref={overlayRef}
// 			isChildLazy={false}
// 			onClick={handleModalAction(onClickOutside)}
// 			onExitComplete={closeModal}
// 		>
// 			<motion.div
// 				transition={{
// 					duration: 0.3
// 				}}
// 				initial={{ y: -20 }}
// 				animate={{ y: 0 }}
// 				exit={{ y: -20 }}
// 			>
// 				<SsmLayerPopup
// 					{...ssmLayerPopupProps}
// 					onClose={handleModalAction(onClose)}
// 					onCancel={handleModalAction(onCancel)}
// 					onConfirm={handleModalAction(onConfirm)}
// 				>
// 					{children}
// 				</SsmLayerPopup>
// 			</motion.div>
// 		</SsmOverlay>
// 	);
// };

// export default ModalLayer;

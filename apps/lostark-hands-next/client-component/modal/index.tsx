'use client';

import { useCallback, useEffect } from 'react';

import Dynamic from '@/client-component/modal/dynamic';
import {
	useModalDispatch,
	useModalState
} from '@/client-component/modal/provider';

const Modal = () => {
	const { modalItem, open } = useModalState();
	const { onCloseModal } = useModalDispatch();

	const ModalComponent = useCallback(() => {
		switch (modalItem?.name) {
			case 'calendarRewardModal':
				return <Dynamic.CALENDAR_REWARD_MODAL {...modalItem.props} />;
			default:
				return null;
		}
	}, [modalItem]);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
	}, [open]);

	return (
		<>
			{open && ModalComponent && (
				<div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
					onClick={onCloseModal}
				>
					<ModalComponent />
				</div>
			)}
		</>
	);
};

export default Modal;

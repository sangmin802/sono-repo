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
			case 'itemListModal':
				return <Dynamic.ITEM_LIST_MODAL {...modalItem.props} />;
			case 'descListModal':
				return <Dynamic.DESC_LIST_MODAL {...modalItem.props} />;
			case 'armoryTooltipModal':
				return <Dynamic.ARMORY_TOOLTIP_MODAL {...modalItem.props} />;
			case 'armoryTooltipListModal':
				return <Dynamic.ARMORY_TOOLTIP_LIST_MODAL {...modalItem.props} />;
			default:
				return null;
		}
	}, [modalItem]);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
	}, [open]);

	return (
		open &&
		ModalComponent && (
			<div
				className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
				onClick={onCloseModal}
			>
				<ModalComponent />
			</div>
		)
	);
};

export default Modal;

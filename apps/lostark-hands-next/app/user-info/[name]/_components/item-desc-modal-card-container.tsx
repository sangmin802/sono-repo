'use client';

import { type PropsWithChildren, useState } from 'react';
import NextImage from 'next/image';

import { Image, Modal, ModalLayout } from '@sono-repo/ui';

import DangerousHTML from '@/client-component/dangerous-html';
import Label from '@/client-component/label';

interface ItemDescModalCardContainerProps extends PropsWithChildren {
	className?: string;
	title?: string;
	data: {
		title: string;
		icon?: string;
		afterTitle?: string;
		desc: string;
	}[];
	children: React.ReactNode;
}

const ItemDescModalCardContainer = ({
	className,
	title,
	data,
	children
}: ItemDescModalCardContainerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickClose = () => {
		setIsOpen(false);
	};

	const handleClickOpen = () => {
		if (!data.length) return;

		setIsOpen(true);
	};

	return (
		<div
			className={className}
			onClick={handleClickOpen}
		>
			{children}
			<Modal
				isOpen={isOpen}
				onClickOutside={handleClickClose}
			>
				<ModalLayout
					title={title}
					confirm={{ show: true, onClick: handleClickClose }}
					containerClassName="flex flex-col gap-y-[12px]"
				>
					{data.map(({ title, afterTitle, desc, icon }, idx) => (
						<div key={idx}>
							<div className="flex items-center gap-x-[4px]">
								{icon && (
									<Image
										as={NextImage}
										className="size-[40px] overflow-hidden rounded-[6px]"
										width={40}
										height={40}
										src={icon}
										alt={icon}
									/>
								)}
								<Label>
									<DangerousHTML html={title} />
								</Label>
								{afterTitle && <div>{afterTitle}</div>}
							</div>
							<DangerousHTML
								className="mt-[6px] pl-[4px]"
								html={desc}
							/>
						</div>
					))}
				</ModalLayout>
			</Modal>
		</div>
	);
};

export default ItemDescModalCardContainer;

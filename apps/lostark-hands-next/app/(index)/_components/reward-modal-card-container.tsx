'use client';

import { type PropsWithChildren, useState } from 'react';
import cn from 'classnames';
import NextImage from 'next/image';

import { Image, Modal, ModalLayout } from '@sono-repo/ui';

import { GRADE_BG_COLOR } from '@/constants';

import type { TGrade } from '@/types';

interface RewardModalCardContainerProps extends PropsWithChildren {
	className?: string;
	title: string;
	list: { icon: string; name: string; grade: TGrade }[];
}

const RewardModalCardContainer = ({
	className,
	title,
	list,
	children
}: RewardModalCardContainerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClickOpen = () => {
		if (!list.length) return;

		setIsOpen(true);
	};

	const handleClickClose = () => {
		setIsOpen(false);
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
				>
					<div className="grid grid-cols-2 gap-[8px] lg:grid-cols-3">
						{list.map(({ icon, name, grade }, idx) => (
							<div
								key={idx}
								className="bg-main-30 relative flex items-center rounded-[6px] p-[6px]"
							>
								<Image
									as={NextImage}
									className={cn(
										'size-[40px] overflow-hidden rounded-[6px]',
										GRADE_BG_COLOR[grade]
									)}
									width={80}
									height={80}
									src={icon}
									alt={name}
								/>
								<div className="ml-[6px] flex min-w-0 grow flex-col justify-center">
									<div className="text-[12px] font-bold">{grade}</div>
									<div className="truncate text-[12px] tracking-tight">
										{name}
									</div>
								</div>
							</div>
						))}
					</div>
				</ModalLayout>
			</Modal>
		</div>
	);
};

export default RewardModalCardContainer;

'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import type { ModalProps } from '@sono-repo/ui';
import { Image, ModalLayout } from '@sono-repo/ui';

import { GRADE_BG_COLOR } from '@/constant';

import type { TGrade } from '@/type';

interface ItemListModalProps extends ModalProps {
	title: string;
	list: { name: string; icon: string; grade: TGrade }[];
}

const ItemListModal = ({ title, list }: ItemListModalProps) => {
	return (
		<ModalLayout
			title={title}
			confirm={{ show: true }}
		>
			<div className="grid grid-cols-2 gap-[8px] lg:grid-cols-3">
				{list.map(({ icon, name, grade }, idx) => (
					<div
						key={idx}
						className="relative flex items-center rounded-[6px] bg-main-30 p-[6px]"
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
							<div className="truncate text-[12px] tracking-tight">{name}</div>
						</div>
					</div>
				))}
			</div>
		</ModalLayout>
	);
};

export default ItemListModal;

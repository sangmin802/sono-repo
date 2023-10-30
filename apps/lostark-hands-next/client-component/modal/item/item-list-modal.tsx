'use client';

import cn from 'classnames';
import Image from 'next/image';

import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';

import { GRADE_BG_COLOR } from '@/constant';

const ItemListModal = ({ title, list }: IModalItemProps['itemListModal']) => {
	return (
		<ModalLayout
			title={title}
			footerProps={{ cancel: { show: false } }}
		>
			<div className="grid grid-cols-2 gap-[8px] lg:grid-cols-3">
				{list.map(({ icon, name, grade }, idx) => (
					<div
						key={idx}
						className="relative flex items-center rounded-[6px] bg-main-30 p-[6px]"
					>
						<Image
							className={cn(
								'h-[40px] w-[40px] rounded-[6px]',
								GRADE_BG_COLOR[grade]
							)}
							width={500}
							height={500}
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

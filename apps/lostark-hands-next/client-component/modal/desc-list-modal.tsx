'use client';

import NextImage from 'next/image';

import type { ModalProps } from '@sono-repo/ui';
import { Image, ModalLayout } from '@sono-repo/ui';

import DangerousHTML from '@/client-component/dangerous-html';
import Label from '@/client-component/label';

interface DescListModalProps extends ModalProps {
	title?: string;
	list: {
		title: string;
		icon?: string;
		afterTitle?: string;
		desc: string;
	}[];
}

const DescListModal = ({ title, list }: DescListModalProps) => {
	return (
		<ModalLayout
			title={title}
			confirm={{ show: true }}
			containerClassName="flex flex-col gap-y-[12px]"
		>
			{list.map(({ title, afterTitle, desc, icon }, idx) => (
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
	);
};

export default DescListModal;

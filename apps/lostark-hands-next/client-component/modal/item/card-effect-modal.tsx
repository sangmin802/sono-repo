'use client';

import type { ICardEffect } from '@/service/armories/types';

import Label from '@/client-component/label';
import ModalLayout from '@/client-component/modal/layout';

interface ICardEffectModalProps {
	effects: ICardEffect[];
}

const CardEffectModal = ({ effects }: ICardEffectModalProps) => {
	return (
		<ModalLayout
			title="카드 세트 효과"
			footerProps={{ cancel: { show: false } }}
			containerClassName="space-y-[16px]"
		>
			{effects.map(({ items }, idx) => (
				<div
					className="space-y-[4px]"
					key={idx}
				>
					{items.map(({ name, description }) => (
						<div
							className="space-y-[2px]"
							key={name}
						>
							<Label className="w-fit">{name}</Label>
							<div className="pl-[6px] text-[12px]">{description}</div>
						</div>
					))}
				</div>
			))}
		</ModalLayout>
	);
};

export default CardEffectModal;

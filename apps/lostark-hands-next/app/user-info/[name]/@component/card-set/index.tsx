'use client';

import cn from 'classnames';

import { Chip, Collapse, useModal } from '@sono-repo/ui';

import type { ICard, ICardEffect } from '@/service/armories/types';

import LabelLayout from '@/client-component/label-layout';
import DescListModal from '@/client-component/modal/desc-list-modal';

import CardItem from './item';

interface ICardSetProps {
	data: {
		cards: (ICard | null)[];
		effects: ICardEffect[] | null;
	};
}

const CardSet = ({ data: { cards, effects } }: ICardSetProps) => {
	const { onOpenModal } = useModal();

	const handleOpenCardEffectModal = () => {
		if (!effects) return;

		onOpenModal({
			component: DescListModal,
			props: {
				title: '카드 세트 효과',
				list: effects
					.flatMap(({ items }) => items)
					.map(({ name, description }) => ({ title: name, desc: description }))
			}
		});
	};

	return (
		<Collapse
			id="card"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex gap-x-[16px]">
						<div>카드</div>
						<div>
							{effects?.map((item, idx) => (
								<Chip
									key={idx}
									type="info"
								>
									{item.items[item.items.length - 1].name}
								</Chip>
							))}
						</div>
					</Collapse.Summary>
				}
				as="section"
			>
				<Collapse.Content className="pt-0">
					<div
						className="grid cursor-pointer grid-cols-6 gap-[8px]"
						onClick={handleOpenCardEffectModal}
					>
						{cards.map((item, idx) => (
							<div
								className={cn('bg-main-10 relative w-full pb-[146%]', {
									['border-main-40 rounded-[6px] border']: !item
								})}
								key={idx}
							>
								{item && <CardItem {...item} />}
							</div>
						))}
					</div>
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export default CardSet;

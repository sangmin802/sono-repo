'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import { Chip, Collapse, Image, useModal } from '@sono-repo/ui';

import type { ICard, ICardEffect } from '@/service/armories/types';

import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import DescListModal from '@/client-component/modal/desc-list-modal';
import Skeleton from '@/client-component/skeleton';

import { CDN_URL } from '@/constant';

import type { TGrade } from '@/type';

interface ICardSetProps {
	data: {
		cards: (ICard | null)[];
		effects: ICardEffect[] | null;
	};
}

const cardOutline: Record<TGrade, number> = {
	일반: 0,
	고급: 1,
	희귀: 2,
	영웅: 3,
	전설: 4,
	유물: 5,
	고대: 6,
	에스더: 7
};

export const CardSet = ({ data: { cards, effects } }: ICardSetProps) => {
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
					<Collapse.Summary className="flex space-x-[16px]">
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
								className={cn('relative w-full bg-main-10 pb-[146%]', {
									['border border-main-40 rounded-[6px]']: !item
								})}
								key={idx}
							>
								{item && (
									<>
										<Image
											className="absolute inset-0"
											src={item.icon}
											alt={item.name}
										/>
										<Image
											className="absolute inset-0 scale-[1.04]"
											src={`${CDN_URL}/2018/obt/assets/images/m/profile/bg_profile_card${
												cardOutline[item.grade]
											}.png`}
											alt={item.grade}
										/>
										<div
											className={cn(
												'absolute bottom-[4px] flex h-[12%] w-full justify-center',
												'space-x-[4px]'
											)}
										>
											{Array.from(
												{ length: item.awakeTotal },
												(_, idx) => idx
											).map((idx) => (
												<Image
													as={NextImage}
													className="h-full w-[10%]"
													key={idx}
													src={
														idx <= item.awakeCount - 1
															? '/icons/img_profile_awake_fill.png'
															: '/icons/img_profile_awake_empty.png'
													}
													width={16}
													height={28}
													alt="awake"
												/>
											))}
										</div>
									</>
								)}
							</div>
						))}
					</div>
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export const CardSetSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="grid cursor-pointer grid-cols-6 gap-[8px]">
			{Array.from({ length: 6 }).map((_, idx) => (
				<Skeleton
					key={idx}
					className="w-full pb-[146%]"
					type="LIGHT"
				/>
			))}
		</div>
	</LabelLayoutSkeleton>
);

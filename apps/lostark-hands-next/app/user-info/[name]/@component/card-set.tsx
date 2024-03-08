'use client';

import cn from 'classnames';
import Image from 'next/image';

import { Accordion, Chip } from '@sono-repo/ui';

import type { ICard, ICardEffect } from '@/service/armories/types';

import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
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
	const { onOpenModal } = useModalDispatch();

	const handleOpenCardEffectModal = () => {
		if (!effects) return;

		onOpenModal({
			name: 'descListModal',
			props: {
				title: '카드 세트 효과',
				list: effects
					.flatMap(({ items }) => items)
					.map(({ name, description }) => ({ title: name, desc: description }))
			}
		});
	};

	return (
		<Accordion>
			<LabelLayout
				label={
					<Accordion.Summary className="w-full">
						<div className="flex space-x-[16px]">
							<div className="text-[16px]">카드</div>
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
						</div>
					</Accordion.Summary>
				}
				as="section"
			>
				<Accordion.Content className="pt-0">
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
											fill
											src={item.icon}
											alt={item.name}
										/>
										<Image
											className="absolute inset-0 scale-[1.04]"
											src={`${CDN_URL}/2018/obt/assets/images/m/profile/bg_profile_card${
												cardOutline[item.grade]
											}.png`}
											fill
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
				</Accordion.Content>
			</LabelLayout>
		</Accordion>
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

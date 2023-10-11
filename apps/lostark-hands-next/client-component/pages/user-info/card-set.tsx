'use client';

import cn from 'classnames';
import Image from 'next/image';

import { Chip } from '@sono-repo/ui';

import type { ICard, ICardEffect } from '@/service/armories/types';

import { useModalDispatch } from '@/client-component/modal/provider';
import LabelLayout from '@/client-component/pages/user-info/label-layout';

import { CDN_URL, GRADE_TEXT_COLOR } from '@/constant';

import type { TGrade } from '@/type';

interface ICardSetProps {
	cards: (ICard | null)[];
	effects: ICardEffect[] | null;
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

const CardSet = ({ cards, effects }: ICardSetProps) => {
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
		<LabelLayout
			label="카드"
			as="section"
			afterLabel={effects?.map((item, idx) => (
				<Chip
					key={idx}
					type="info"
				>
					{item.items[item.items.length - 1].name}
				</Chip>
			))}
		>
			<div
				className="grid cursor-pointer grid-cols-3 gap-[8px] md:grid-cols-6"
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
								<div className="absolute inset-0">
									<Image
										className="absolute inset-0 scale-[1.04]"
										src={`${CDN_URL}/2018/obt/assets/images/m/profile/bg_profile_card${
											cardOutline[item.grade]
										}.png`}
										width={300}
										height={438}
										alt={item.grade}
									/>
									<Chip
										className={cn(
											'absolute inset-x-[8px] top-[10px] w-fit max-w-[90%]',
											'text-center font-bold',
											GRADE_TEXT_COLOR[item.grade]
										)}
										type="transparent"
									>
										{item.name}
									</Chip>
									<Image
										width={300}
										height={438}
										src={item.icon}
										alt={item.name}
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
								</div>
							</>
						)}
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default CardSet;

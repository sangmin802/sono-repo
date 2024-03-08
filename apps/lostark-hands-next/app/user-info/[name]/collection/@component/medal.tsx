'use client';

import type { IArmoryEquipment, TParsedArmory } from '@/service/armories/types';

import GradeText from '@/client-component/grade-text';
import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import {
	ThumbnailCard,
	ThumbnailCardSkeleton
} from '@/client-component/thumbnail-card';

interface IMedalProps {
	data: { col: TParsedArmory<IArmoryEquipment>[] | null };
}

export const CollectionMedal = ({ data }: IMedalProps) => {
	const { onOpenModal } = useModalDispatch();

	const handleOpenModal = (item: TParsedArmory<IArmoryEquipment>) => {
		if (!item.name) return;

		onOpenModal({
			name: 'armoryTooltipModal',
			props: {
				...item
			}
		});
	};

	return (
		<LabelLayout
			className="my-[16px] h-fit shrink-0 lg:my-0"
			label="수집품 보상"
		>
			<div className="space-y-[8px]">
				{data.col?.map((item, idx) => (
					<ThumbnailCard
						key={idx}
						className="h-[40px] w-[40px]"
						src={item.icon}
						grade={item.grade}
						alt={item.name}
						onClick={() => handleOpenModal(item)}
					>
						<GradeText grade={item.grade}>{item.name}</GradeText>
					</ThumbnailCard>
				))}
			</div>
		</LabelLayout>
	);
};

export const CollectionMedalSkeleton = () => (
	<LabelLayoutSkeleton className="my-[16px] lg:my-0">
		<div className="space-y-[8px]">
			{Array.from({ length: 2 }).map((_, idx) => (
				<ThumbnailCardSkeleton
					className="h-[40px] w-[40px]"
					key={idx}
				/>
			))}
		</div>
	</LabelLayoutSkeleton>
);

'use client';

import type { IArmoryEquipment, TParsedArmory } from '@/service/armories/types';

import {
	ArmoryCard,
	ArmoryCardSkeleton
} from '@/app/user-info/[name]/@component/armory-card';
import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';

interface IMedalProps {
	data: { col: TParsedArmory<IArmoryEquipment>[] | null };
}

export const CollectionMedal = ({ data }: IMedalProps) => {
	const { onOpenModal } = useModalDispatch();

	return (
		<LabelLayout
			className="my-[16px] h-fit shrink-0 lg:my-0"
			label="수집품 보상"
		>
			<div className="space-y-[8px]">
				{data.col?.map((item, idx) => (
					<ArmoryCard
						key={idx}
						{...item}
						onOpenModal={onOpenModal}
					/>
				))}
			</div>
		</LabelLayout>
	);
};

export const CollectionMedalSkeleton = () => (
	<LabelLayoutSkeleton className="my-[16px] lg:my-0">
		<div className="space-y-[8px]">
			{Array.from({ length: 2 }).map((_, idx) => (
				<ArmoryCardSkeleton key={idx} />
			))}
		</div>
	</LabelLayoutSkeleton>
);

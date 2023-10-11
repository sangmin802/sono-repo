'use client';

import type { IArmoryEquipment, TParsedArmory } from '@/service/armories/types';

import { useModalDispatch } from '@/client-component/modal/provider';
import ArmoryCard from '@/client-component/pages/user-info/armory-card';
import LabelLayout from '@/client-component/pages/user-info/label-layout';

interface ICollectionMedalProps {
	data: TParsedArmory<IArmoryEquipment>[];
}

const CollectionMedal = ({ data }: ICollectionMedalProps) => {
	const { onOpenModal } = useModalDispatch();

	return (
		<LabelLayout
			className="my-[16px] h-fit shrink-0 lg:my-0"
			label="수집품 보상"
		>
			<div className="space-y-[8px]">
				{data.map((item, idx) => (
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

export default CollectionMedal;

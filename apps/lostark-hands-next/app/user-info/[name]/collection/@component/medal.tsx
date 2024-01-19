'use client';

import type { IArmoryEquipment, TParsedArmory } from '@/service/armories/types';

import ArmoryCard from '@/app/user-info/[name]/@component/armory-card';
import { LabelLayout } from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';

interface IMedalProps {
	data: TParsedArmory<IArmoryEquipment>[];
}

const Medal = ({ data }: IMedalProps) => {
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

export default Medal;

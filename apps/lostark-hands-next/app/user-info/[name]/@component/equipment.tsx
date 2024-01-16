'use client';

import type { IArmoryEquipment, TParsedArmory } from '@/service/armories/types';

import ArmoryCard from '@/app/user-info/[name]/@component/armory-card';
import LabelLayout from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';

interface IEquipmentProps {
	data: Record<'equip' | 'acc', TParsedArmory<IArmoryEquipment>[]>;
}

const Equipment = ({ data: { equip, acc } }: IEquipmentProps) => {
	const { onOpenModal } = useModalDispatch();

	return (
		<>
			<LabelLayout
				label="장비"
				as="section"
			>
				<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
					{equip.map((item) => (
						<ArmoryCard
							key={item.type}
							onOpenModal={onOpenModal}
							{...item}
						/>
					))}
				</div>
			</LabelLayout>
			<LabelLayout
				label="장신구"
				as="section"
			>
				<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
					<div className="flex flex-col space-y-[8px]">
						{acc.slice(0, 5).map((item, idx) => (
							<ArmoryCard
								key={`${item.type}-${idx}`}
								onOpenModal={onOpenModal}
								{...item}
							/>
						))}
					</div>
					<div className="flex flex-col space-y-[8px]">
						{acc.slice(5, acc.length).map((item, idx) => (
							<ArmoryCard
								key={`${item.type}-${idx}`}
								onOpenModal={onOpenModal}
								{...item}
							/>
						))}
					</div>
				</div>
			</LabelLayout>
		</>
	);
};

export default Equipment;

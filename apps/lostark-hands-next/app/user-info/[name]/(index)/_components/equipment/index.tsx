'use client';

import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/_types';

import LabelLayout from '@/client-component/label-layout';

import AccCard from './acc-card';
import ArmoryCard from './armory-card';

interface IEquipmentProps {
	data: Record<'equip' | 'acc', TParsedArmory<ISelectedArmoryEquipment>[]>;
}

const Equipment = ({ data: { equip, acc } }: IEquipmentProps) => {
	const accGrid = [
		[0, 5],
		[5, acc.length]
	];

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
					{accGrid.map((num, idx) => (
						<div
							key={idx}
							className="flex flex-col gap-y-[8px]"
						>
							{acc.slice(...num).map((item, idx) => (
								<AccCard
									key={`${item.type}-${idx}`}
									{...item}
								/>
							))}
						</div>
					))}
				</div>
			</LabelLayout>
		</>
	);
};

export default Equipment;

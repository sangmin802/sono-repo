'use client';

import { useModal } from '@sono-repo/ui';
import { removeHtmlTag } from '@sono-repo/util/convert';

import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/_types';

import QualityChip from '@/app/user-info/[name]/@component/quality-chip';
import LabelLayout from '@/client-component/label-layout';
import ArmoryTooltipModal from '@/client-component/modal/armory-tooltip-modal';

import AccCard from './acc-card';
import ArmoryCard from './armory-card';

interface IEquipmentProps {
	data: Record<'equip' | 'acc', TParsedArmory<ISelectedArmoryEquipment>[]>;
}

const Equipment = ({ data: { equip, acc } }: IEquipmentProps) => {
	const { onOpenModal } = useModal();

	const handleOpenModal = (item: TParsedArmory<ISelectedArmoryEquipment>) => {
		if (!item.name) return;

		onOpenModal({
			component: ArmoryTooltipModal,
			props: {
				...item,
				subTitle: removeHtmlTag(item.levelInfo),
				afterSubTitle: <QualityChip size={item.quality} />
			}
		});
	};

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
							onClick={() => handleOpenModal(item)}
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
									onClick={() => handleOpenModal(item)}
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

'use client';

import { useModal } from '@sono-repo/ui';

import type { IArmoryEquipment, TParsedArmory } from '@/service/armories/types';

import GradeText from '@/client-component/grade-text';
import LabelLayout from '@/client-component/label-layout';
import ArmoryTooltipModal from '@/client-component/modal/armory-tooltip-modal';
import ThumbnailCard from '@/client-component/thumbnail-card';

interface IMedalProps {
	data: { col: TParsedArmory<IArmoryEquipment>[] | null };
}

const CollectionMedal = ({ data }: IMedalProps) => {
	const { onOpenModal } = useModal();

	const handleOpenModal = (item: TParsedArmory<IArmoryEquipment>) => {
		if (!item.name) return;

		onOpenModal({
			component: ArmoryTooltipModal,
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

export default CollectionMedal;

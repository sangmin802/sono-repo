'use client';

import { useModal } from '@sono-repo/ui';

import type {
	ArkGrid,
	ArkGridEffect,
	ArkGridSlot,
	TParsedArmory
} from '@/service/armories/_types';

import GradeText from '@/client-component/grade-text';
import LabelLayout from '@/client-component/label-layout';
import ArmoryTooltipModal from '@/client-component/modal/armory-tooltip-modal';
import Thumbnail from '@/client-component/thumbnail';

interface ArkGridProps {
	data: {
		slots: TParsedArmory<ArkGridSlot>[] | null;
		effects: ArkGridEffect[] | null;
	};
}

const ArkGrid = ({ data: { slots } }: ArkGridProps) => {
	const { onOpenModal } = useModal();

	const handleOpenModal = (item: TParsedArmory<ArkGridSlot>) => {
		onOpenModal({
			component: ArmoryTooltipModal,
			props: item
		});
	};

	return (
		<LabelLayout
			label="아크 그리드"
			empty={{
				status: !slots,
				fallback: '아크 그리드가 활성화되지 않았습니다.'
			}}
		>
			<div className="space-y-[8px]">
				{slots?.map((slot) => (
					<div
						className="flex w-full min-w-0 items-center"
						key={slot.index}
						onClick={() => handleOpenModal(slot)}
					>
						<Thumbnail
							className="mr-[8px] size-[40px] shrink-0"
							src={slot.icon}
							alt={slot.name}
							grade={slot.grade}
						/>
						<GradeText
							className="truncate"
							grade={slot.grade}
						>
							{slot.name} {slot.point}
						</GradeText>
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default ArkGrid;

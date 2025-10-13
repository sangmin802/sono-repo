'use client';

import type {
	ArkGrid,
	ArkGridEffect,
	ArkGridSlot,
	TParsedArmory
} from '@/service/armories/_types';

import GradeText from '@/client-component/grade-text';
import LabelLayout from '@/client-component/label-layout';
import Thumbnail from '@/client-component/thumbnail';

import TooltipModalCardContainer from '../../_components/tooltip-modal-card-container';

interface ArkGridProps {
	data: {
		slots: TParsedArmory<ArkGridSlot>[] | null;
		effects: ArkGridEffect[] | null;
	};
}

const ArkGrid = ({ data: { slots } }: ArkGridProps) => {
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
					<TooltipModalCardContainer
						className="flex w-full min-w-0 items-center"
						key={slot.index}
						data={slot}
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
					</TooltipModalCardContainer>
				))}
			</div>
		</LabelLayout>
	);
};

export default ArkGrid;

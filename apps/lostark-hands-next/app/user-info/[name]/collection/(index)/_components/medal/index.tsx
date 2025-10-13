'use client';

import type {
	IArmoryEquipment,
	TParsedArmory
} from '@/service/armories/_types';

import TooltipModalCardContainer from '@/app/user-info/[name]/_components/tooltip-modal-card-container';
import GradeText from '@/client-component/grade-text';
import LabelLayout from '@/client-component/label-layout';
import ThumbnailCard from '@/client-component/thumbnail-card';

interface IMedalProps {
	data: { col: TParsedArmory<IArmoryEquipment>[] | null };
}

const CollectionMedal = ({ data }: IMedalProps) => {
	return (
		<LabelLayout
			className="my-[16px] h-fit shrink-0 lg:my-0"
			label="수집품 보상"
		>
			<div className="flex flex-col gap-y-[8px]">
				{data.col?.map((item, idx) => (
					<TooltipModalCardContainer
						key={idx}
						data={item}
					>
						<ThumbnailCard
							className="h-[40px] w-[40px]"
							src={item.icon}
							grade={item.grade}
							alt={item.name}
						>
							<GradeText grade={item.grade}>{item.name}</GradeText>
						</ThumbnailCard>
					</TooltipModalCardContainer>
				))}
			</div>
		</LabelLayout>
	);
};

export default CollectionMedal;

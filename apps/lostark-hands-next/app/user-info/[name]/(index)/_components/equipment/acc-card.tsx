import { removeHtmlTag } from '@sono-repo/util/convert';

import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/_types';

import GradeText from '@/client-component/grade-text';
import ThumbnailCard from '@/client-component/thumbnail-card';

import TooltipModalCardContainer from '../../../_components/tooltip-modal-card-container';
import QualityChip from '../quality-chip';
import { POLISHING_EFFECT_OPTIONS } from './_constants';

const AccCard = (item: TParsedArmory<ISelectedArmoryEquipment>) => {
	return (
		<TooltipModalCardContainer
			data={{
				...item,
				subTitle: removeHtmlTag(item.levelInfo),
				afterSubTitle: <QualityChip size={item.quality} />
			}}
		>
			<ThumbnailCard
				className="h-[40px] w-[40px]"
				grade={item.grade}
				src={item.icon}
				alt={item.name}
			>
				{item.name && (
					<>
						<div className="flex gap-x-[8px]">
							<QualityChip size={item.quality} />
							<GradeText
								className="text-[12px]"
								grade={item.grade}
							>
								{item.type}
							</GradeText>
						</div>
						<div className="flex gap-x-[8px]">
							{item.polishingEffect &&
								item.polishingEffect.map((value) => (
									<GradeText
										className="text-[12px]"
										key={value}
										grade={POLISHING_EFFECT_OPTIONS[value].grade}
									>
										{POLISHING_EFFECT_OPTIONS[value].text}
									</GradeText>
								))}
						</div>
					</>
				)}
			</ThumbnailCard>
		</TooltipModalCardContainer>
	);
};

export default AccCard;

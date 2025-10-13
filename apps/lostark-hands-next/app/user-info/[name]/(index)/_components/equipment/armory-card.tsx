import { removeHtmlTag } from '@sono-repo/util/convert';

import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/_types';

import { onlyNumber } from '@/utils';

import GradeText from '@/client-component/grade-text';
import ThumbnailCard from '@/client-component/thumbnail-card';

import TooltipModalCardContainer from '../../../_components/tooltip-modal-card-container';
import QualityChip from '../quality-chip';
import Elixir from './elixir';
import Transcendence from './transcedence';

const ArmoryCard = (item: TParsedArmory<ISelectedArmoryEquipment>) => {
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
				key={item.type}
				src={item.icon}
				alt={item.name}
			>
				{item.name && (
					<>
						<div className="flex gap-x-[8px]">
							<GradeText
								className="text-[12px]"
								grade={item.grade}
							>
								+{onlyNumber(item.name)}
							</GradeText>
							<GradeText
								className="text-[12px]"
								grade={item.grade}
							>
								{onlyNumber(removeHtmlTag(item.levelInfo))?.[0]}
								{` [+${item.advancedReinforce ?? 0}]`}
							</GradeText>
							<QualityChip size={item.quality} />
						</div>
						<div className="flex items-center gap-x-[6px]">
							{item.elixir && <Elixir data={item.elixir} />}
							{item.transcendence && <Transcendence {...item.transcendence} />}
						</div>
					</>
				)}
			</ThumbnailCard>
		</TooltipModalCardContainer>
	);
};

export default ArmoryCard;

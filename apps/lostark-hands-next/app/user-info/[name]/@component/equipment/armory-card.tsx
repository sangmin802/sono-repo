import { removeHtmlTag } from '@sono-repo/util/convert';

import { onlyNumber } from '@/util/selector';

import GradeText from '@/client-component/grade-text';
import { ThumbnailCard } from '@/client-component/thumbnail-card';

import QualityChip from '../quality-chip';
import Elixir from './elixir';
import Transcendence from './transcedence';
import type { IEquipCardProps } from './types';

const ArmoryCard = ({ onClick, ...item }: IEquipCardProps) => {
	return (
		<ThumbnailCard
			className="h-[40px] w-[40px]"
			grade={item.grade}
			key={item.type}
			src={item.icon}
			alt={item.name}
			onClick={onClick}
		>
			{item.name && (
				<>
					<div className="flex space-x-[8px]">
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
					<div className="flex items-center space-x-[6px]">
						{item.elixir && <Elixir {...item.elixir} />}
						{item.transcendence && <Transcendence {...item.transcendence} />}
					</div>
				</>
			)}
		</ThumbnailCard>
	);
};

export default ArmoryCard;

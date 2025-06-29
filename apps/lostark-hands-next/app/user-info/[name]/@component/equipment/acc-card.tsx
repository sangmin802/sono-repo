import GradeText from '@/client-component/grade-text';
import ThumbnailCard from '@/client-component/thumbnail-card';

import QualityChip from '../quality-chip';
import { POLISHING_EFFECT_OPTIONS } from './_constants';
import type { IEquipCardProps } from './_types';

const AccCard = ({ onClick, ...item }: IEquipCardProps) => {
	return (
		<ThumbnailCard
			className="h-[40px] w-[40px]"
			grade={item.grade}
			src={item.icon}
			alt={item.name}
			onClick={onClick}
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
	);
};

export default AccCard;

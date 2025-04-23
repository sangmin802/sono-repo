'use client';

import type { IArmoryAvatar, TParsedArmory } from '@/service/armories/types';

import GradeText from '@/client-component/grade-text';
import LabelLayout from '@/client-component/label-layout';
import ThumbnailCard from '@/client-component/thumbnail-card';

interface IAvatarGridProps {
	data: TParsedArmory<IArmoryAvatar>[][];
}

const AvatarGrid = ({ data }: IAvatarGridProps) => (
	<LabelLayout
		label="아바타"
		as="section"
	>
		<div className="flex flex-col gap-y-[8px]">
			{data.map((list) => (
				<div
					className="grid grid-cols-2 gap-[4px]"
					key={list[0].type}
				>
					{list.map((item, idx) => (
						<ThumbnailCard
							key={idx}
							className="h-[40px] w-[40px]"
							grade={item.grade}
							src={item.icon}
							alt={item.name}
						>
							<GradeText grade={item.grade}>{item.name}</GradeText>
						</ThumbnailCard>
					))}
				</div>
			))}
		</div>
	</LabelLayout>
);

export default AvatarGrid;

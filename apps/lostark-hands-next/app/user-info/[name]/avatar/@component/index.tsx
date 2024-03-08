'use client';

import type { IArmoryAvatar, TParsedArmory } from '@/service/armories/types';

import GradeText from '@/client-component/grade-text';
import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import {
	ThumbnailCard,
	ThumbnailCardSkeleton
} from '@/client-component/thumbnail-card';

interface IAvatarProps {
	data: TParsedArmory<IArmoryAvatar>[][];
}

export const Avatar = ({ data }: IAvatarProps) => (
	<LabelLayout
		label="아바타"
		as="section"
	>
		<div className="space-y-[8px]">
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

export const AvatarSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="space-y-[8px]">
			{Array.from({ length: 7 }).map((_, idx) => (
				<div
					className="grid grid-cols-2 gap-[4px]"
					key={idx}
				>
					{Array.from({ length: Math.round(Math.random() * 1) + 1 }).map(
						(_, idx) => (
							<ThumbnailCardSkeleton
								key={idx}
								className="h-[40px] w-[40px]"
							/>
						)
					)}
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

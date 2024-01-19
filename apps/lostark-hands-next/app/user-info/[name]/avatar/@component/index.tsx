'use client';

import type { IArmoryAvatar, TParsedArmory } from '@/service/armories/types';

import {
	ArmoryCard,
	ArmoryCardSkeleton
} from '@/app/user-info/[name]/@component/armory-card';
import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';

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
						<ArmoryCard
							key={idx}
							showChip={false}
							{...item}
						/>
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
							<ArmoryCardSkeleton key={idx} />
						)
					)}
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

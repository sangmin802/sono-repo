'use client';

import type { IArmoryAvatar, TParsedArmory } from '@/service/armories/types';

import ArmoryCard from '@/app/user-info/[name]/@component/armory-card';
import { LabelLayout } from '@/client-component/label-layout';

interface IAvatarProps {
	data: TParsedArmory<IArmoryAvatar>[][];
}

const Avatar = ({ data }: IAvatarProps) => {
	return (
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
};

export default Avatar;

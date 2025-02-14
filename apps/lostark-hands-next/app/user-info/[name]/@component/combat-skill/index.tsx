'use client';

import { Chip, Collapse } from '@sono-repo/ui';

import LabelLayout from '@/client-component/label-layout';

import SkillCard from './card';
import type { TData } from './types';
import { minifySkill } from './utils';

interface ICombatSkillProps {
	data: TData;
}

const CombatSkill = ({ data }: ICombatSkillProps) => {
	const [destory, counter] = minifySkill(data) ?? [0, 0];

	return (
		<Collapse
			id="combat-skill"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex space-x-[16px]">
						<div>스킬</div>
						{data && (
							<div className="flex space-x-[8px]">
								<Chip type="info">부위파괴 {destory}</Chip>
								<Chip type="info">카운터 {counter}</Chip>
							</div>
						)}
					</Collapse.Summary>
				}
				as="section"
				empty={{ status: !data, fallback: '선택된 스킬이 없습니다.' }}
			>
				<Collapse.Content className="grid grid-cols-2 gap-[12px] pt-0 md:grid-cols-4">
					{data?.map((item, index) => (
						<SkillCard
							key={index}
							{...item}
						/>
					))}
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export default CombatSkill;

'use client';

import cn from 'classnames';

import { Collapse } from '@sono-repo/ui';

import type { ISelectedArkPassive } from '@/service/armories/types';

import Label from '@/client-component/label';
import LabelLayout from '@/client-component/label-layout';

import { ARK_PASSIVE_COLOR_CONFIG } from './constants';
import ContentGrid from './content-grid';

interface IStatsProps {
	data: { arkPassive: ISelectedArkPassive };
}

const ArkPassiveCollapse = ({
	data: {
		arkPassive: { isArkPassive, points, effects }
	}
}: IStatsProps) => {
	if (!isArkPassive) return;

	return (
		<Collapse
			id="stats"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex items-center space-x-[8px]">
						{points.map((item) => (
							<Label
								className={cn(
									'font-semibold',
									ARK_PASSIVE_COLOR_CONFIG[item.name]
								)}
								key={item.name}
							>
								{item.name} {item.value}
							</Label>
						))}
					</Collapse.Summary>
				}
				as="aside"
			>
				<Collapse.Content className="grid grid-cols-1 gap-[12px] pt-0 lg:grid-cols-3">
					{Object.entries(effects).map(([key, group]) => (
						<ContentGrid
							key={key}
							title={key}
							group={group}
						/>
					))}
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export default ArkPassiveCollapse;

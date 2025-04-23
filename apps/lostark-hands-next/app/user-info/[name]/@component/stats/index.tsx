'use client';

import { Collapse, useModal } from '@sono-repo/ui';

import type { IStat } from '@/service/armories/types';

import Label from '@/client-component/label';
import LabelLayout from '@/client-component/label-layout';
import DescListModal from '@/client-component/modal/desc-list-modal';

interface IStatsProps {
	data: {
		stats: IStat[];
	};
}

const Stats = ({ data: { stats: initStats } }: IStatsProps) => {
	const { onOpenModal } = useModal();

	const stats = initStats.slice(0, 6);
	const power = initStats[7];
	const healty = initStats[6];

	const mainStats = stats
		.sort((a, b) => Number(b.value) - Number(a.value))
		.slice(0, 2);

	const handleOpenModal = () => {
		if (!Number(power.value) || !Number(healty.value)) return;

		onOpenModal({
			component: DescListModal,
			props: {
				title: '능력치',
				list: [power, healty, ...stats].map(({ type, value, tooltip }) => ({
					title: type,
					afterTitle: value,
					desc: tooltip.join()
				}))
			}
		});
	};

	return (
		<Collapse
			id="stats"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex items-center gap-x-[8px]">
						{mainStats.map(({ type, value }) => (
							<div
								className="flex items-center gap-x-[4px]"
								key={type}
							>
								<Label>{type}</Label>
								<div>{value}</div>
							</div>
						))}
					</Collapse.Summary>
				}
				as="aside"
			>
				<Collapse.Content
					className="pt-0"
					onClick={handleOpenModal}
				>
					<div className="grid grid-cols-2 gap-[8px]">
						<div className="flex flex-col gap-y-[4px] text-center">
							<Label>{power.type}</Label>
							<div>{power.value}</div>
						</div>
						<div className="flex flex-col gap-y-[4px] text-center">
							<Label>{healty.type}</Label>
							<div>{healty.value}</div>
						</div>
					</div>
					<div className="mt-[12px] grid grid-cols-2 gap-[6px]">
						{stats.map(({ type, value }) => (
							<div
								className="flex items-center gap-x-[4px]"
								key={type}
							>
								<Label>{type}</Label>
								<div>{value}</div>
							</div>
						))}
					</div>
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export default Stats;

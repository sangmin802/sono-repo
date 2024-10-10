'use client';

import { Collapse } from '@sono-repo/ui';

import type { IStat } from '@/service/armories/types';

import Label from '@/client-component/label';
import { LabelLayout } from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import Skeleton from '@/client-component/skeleton';

interface IStatsProps {
	data: {
		stats: IStat[];
	};
}

export const Stats = ({ data: { stats: initStats } }: IStatsProps) => {
	const { onOpenModal } = useModalDispatch();

	const stats = initStats.slice(0, 6);
	const power = initStats[7];
	const healty = initStats[6];

	const mainStats = stats
		.sort((a, b) => Number(b.value) - Number(a.value))
		.slice(0, 2);

	const handleOpenModal = () => {
		if (!Number(power.value) || !Number(healty.value)) return;

		onOpenModal({
			name: 'descListModal',
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
					<Collapse.Summary className="flex items-center space-x-[8px]">
						{mainStats.map(({ type, value }) => (
							<div
								className="flex items-center space-x-[4px]"
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
						<div className="space-y-[4px] text-center">
							<Label>{power.type}</Label>
							<div>{power.value}</div>
						</div>
						<div className="space-y-[4px] text-center">
							<Label>{healty.type}</Label>
							<div>{healty.value}</div>
						</div>
					</div>
					<div className="mt-[12px] grid grid-cols-2 gap-[6px]">
						{stats.map(({ type, value }) => (
							<div
								className="flex items-center space-x-[4px]"
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

export const StatsSkeleton = () => (
	<Skeleton className="!mt-0 p-[8px]">
		<div className="grid grid-cols-2 gap-[8px]">
			<div className="space-y-[4px] text-center">
				<Skeleton
					type="LIGHT"
					className="h-[29px] w-full"
				/>
				<Skeleton
					type="LIGHT"
					className="mx-auto h-[21px]"
					randomWidth={{ max: 60, min: 40 }}
				/>
			</div>
			<div className="space-y-[4px] text-center">
				<Skeleton
					type="LIGHT"
					className="h-[29px] w-full"
				/>
				<Skeleton
					type="LIGHT"
					className="mx-auto h-[21px]"
					randomWidth={{ max: 60, min: 40 }}
				/>
			</div>
		</div>
		<div className="mt-[12px] grid grid-cols-2 gap-[6px]">
			{Array.from({ length: 6 }).map((_, idx) => (
				<div
					className="flex items-center space-x-[4px]"
					key={idx}
				>
					<Skeleton
						type="LIGHT"
						className="h-[29px] w-[36px]"
					/>
					<Skeleton
						type="LIGHT"
						className="h-[29px]"
						randomWidth={{ max: 36, min: 16 }}
					/>
				</div>
			))}
		</div>
	</Skeleton>
);

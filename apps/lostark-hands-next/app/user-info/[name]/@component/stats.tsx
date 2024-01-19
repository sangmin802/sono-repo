'use client';

import type { IStat } from '@/service/armories/types';

import Label from '@/client-component/label';
import { useModalDispatch } from '@/client-component/modal/provider';
import Skeleton from '@/client-component/skeleton';

import type { ToCamelKey } from '@/type';

interface IStatsProps {
	stats: ToCamelKey<IStat>[];
	power: ToCamelKey<IStat>;
	healty: ToCamelKey<IStat>;
}

export const Stats = ({ stats, power, healty }: IStatsProps) => {
	const { onOpenModal } = useModalDispatch();

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
		<div
			className="cursor-pointer rounded-[6px] bg-main-20 p-[8px]"
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
		</div>
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

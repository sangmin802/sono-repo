'use client';

import { Collapse } from '@sono-repo/ui';

import type { IArkPassive } from '@/service/armories/types';

import Label from '@/client-component/label';
import { LabelLayout } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';

interface IStatsProps {
	data: {
		arkPassive: IArkPassive;
	};
}

export const ArkPassive = ({
	data: {
		arkPassive: { isArkPassive, points }
	}
}: IStatsProps) => {
	return (
		<Collapse id="stats">
			<LabelLayout
				label={
					<Collapse.Summary className="flex items-center space-x-[8px]">
						<div>아크 패시브</div>
						<div
							className={
								isArkPassive ? 'font-semibold text-[#ffd000]' : 'text-gray-600'
							}
						>
							{isArkPassive ? 'ON' : 'OFF'}
						</div>
					</Collapse.Summary>
				}
				as="aside"
			>
				<Collapse.Content className="pt-0">
					<div className="grid grid-cols-2 gap-[8px]">
						{points.map((item) => (
							<div
								className="space-y-[4px] text-center"
								key={item.name}
							>
								<Label>{item.name}</Label>
								<div>{item.value}</div>
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

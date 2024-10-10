'use client';

import { Collapse } from '@sono-repo/ui';

import Label from '@/client-component/label';
import { LabelLayout } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';

interface ITendenceisProps {
	data: {
		tendencies: {
			type: string;
			point: number;
			maxPoint: number;
		}[];
	};
}

export const Tendencies = ({ data: { tendencies } }: ITendenceisProps) => {
	return (
		<Collapse
			id="tendencies"
			isInitOpen
		>
			<LabelLayout
				label={<Collapse.Summary>성향</Collapse.Summary>}
				as="aside"
			>
				<Collapse.Content className="grid grid-cols-2 gap-[6px] rounded-[6px] pt-0">
					{tendencies.map(({ type, point }) => (
						<div
							className="flex items-center space-x-[4px]"
							key={type}
						>
							<Label>{type}</Label>
							<div>{point}</div>
						</div>
					))}
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export const TendenciesSkeleton = () => (
	<Skeleton className="grid grid-cols-2 gap-[6px] p-[8px]">
		{Array.from({ length: 4 }).map((_, idx) => (
			<div
				className="flex items-center space-x-[4px]"
				key={idx}
			>
				<Skeleton
					className="h-[29px] w-[36px]"
					type="LIGHT"
				/>
				<Skeleton
					className="h-[29px] w-[36px]"
					type="LIGHT"
				/>
			</div>
		))}
	</Skeleton>
);

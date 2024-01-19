import { getProfileInfoApi } from '@/service/armories';
import { profileTooltipSelector } from '@/service/armories/selector';

import Label from '@/client-component/label';
import Skeleton from '@/client-component/skeleton';

export const Tendencies = async ({ name }: { name: string }) => {
	const data = await getProfileInfoApi(name);
	const { tendencies } = profileTooltipSelector(data);

	return (
		<div className="grid grid-cols-2 gap-[6px] rounded-[6px] bg-main-20 p-[8px]">
			{tendencies.map(({ type, point }) => (
				<div
					className="flex items-center space-x-[4px]"
					key={type}
				>
					<Label>{type}</Label>
					<div>{point}</div>
				</div>
			))}
		</div>
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

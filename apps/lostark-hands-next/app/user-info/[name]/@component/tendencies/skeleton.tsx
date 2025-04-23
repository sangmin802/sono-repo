import Skeleton from '@/client-component/skeleton';

const TendenciesSkeleton = () => (
	<Skeleton className="grid grid-cols-2 gap-[6px] p-[8px]">
		{Array.from({ length: 4 }).map((_, idx) => (
			<div
				className="flex items-center gap-x-[4px]"
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

export default TendenciesSkeleton;

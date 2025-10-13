import Skeleton from '@/client-component/skeleton';

const StatsSkeleton = () => (
	<Skeleton className="!mt-0 p-[8px]">
		<div className="grid grid-cols-2 gap-[8px]">
			<div className="flex flex-col gap-y-[4px] text-center">
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
			<div className="flex flex-col gap-y-[4px] text-center">
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
					className="flex items-center gap-x-[4px]"
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

export default StatsSkeleton;

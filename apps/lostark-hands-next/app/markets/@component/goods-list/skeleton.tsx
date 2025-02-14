import cn from 'classnames';

import Skeleton from '@/client-component/skeleton';

const ListSkeleton = () => (
	<div className="grid gap-[24px] md:grid-cols-2">
		{Array.from({ length: 20 }).map((_, idx) => (
			<div
				key={idx}
				className={cn(
					'flex items-center justify-between space-x-[4px] p-[6px] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]',
					'duration-75 ease-in-out hover:scale-[1.01]'
				)}
			>
				<div className="flex shrink-0 grow basis-0 items-center space-x-[8px]">
					<div className="h-[40px] w-[40px] rounded-[4px] bg-main-20" />
					<div className="grow space-y-[1px]">
						<Skeleton
							className="h-[20px]"
							randomWidth={{ unit: '%', min: 20, max: 80 }}
						/>
						<Skeleton
							className="h-[20px]"
							randomWidth={{ unit: '%', min: 20, max: 80 }}
						/>
						<Skeleton
							className="h-[14px]"
							randomWidth={{ unit: '%', min: 20, max: 80 }}
						/>
					</div>
				</div>
				<div className="shrink-0 grow basis-0 space-y-[4px]">
					<Skeleton className="h-[26px]" />
					<Skeleton className="h-[26px]" />
					<Skeleton className="h-[26px]" />
				</div>
			</div>
		))}
	</div>
);

export default ListSkeleton;

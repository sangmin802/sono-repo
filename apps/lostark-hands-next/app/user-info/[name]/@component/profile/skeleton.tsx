import Skeleton from '@/client-component/skeleton';

const ProfileSkeleton = () => (
	<div className="relative h-[240px] w-full md:h-[360px]">
		<div className="absolute z-[4] flex h-full flex-col justify-center">
			<div className="flex flex-col gap-y-[16px] px-[16px]">
				<div className="flex gap-x-[8px]">
					<Skeleton
						className="h-[29px]"
						randomWidth={{ max: 70, min: 40 }}
					/>
					<Skeleton
						className="h-[29px]"
						randomWidth={{ max: 70, min: 40 }}
					/>
				</div>
				<div className="flex items-baseline gap-x-[4px]">
					<Skeleton
						className="h-[18px]"
						randomWidth={{ max: 70, min: 40 }}
					/>
					<Skeleton
						className="h-[33px]"
						randomWidth={{ max: 36, min: 30 }}
					/>
				</div>
				<div className="flex flex-col gap-y-[6px]">
					{Array.from({ length: 3 }).map((_, idx) => (
						<div
							key={idx}
							className="flex items-center gap-x-[4px]"
						>
							<Skeleton
								className="h-[29px]"
								randomWidth={{ max: 36, min: 30 }}
							/>
							<Skeleton
								className="h-[29px]"
								randomWidth={{ max: 100, min: 70 }}
							/>
						</div>
					))}
				</div>
				<div className="flex gap-x-[10px]">
					{Array.from({ length: 3 }).map((_, idx) => (
						<div
							key={idx}
							className="flex flex-col gap-y-[4px]"
						>
							<Skeleton className="h-[24px] w-[60px] sm:h-[27px] sm:w-[50px]" />
							<Skeleton className="h-[24px] w-[90px] sm:h-[27px] sm:w-[101px]" />
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default ProfileSkeleton;

import { LabelLayoutSkeleton } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';

const CombatSkillSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="grid grid-cols-2 gap-[12px] md:grid-cols-4">
			{Array.from({ length: 8 }).map((_, idx) => (
				<div
					className="flex cursor-pointer flex-col space-y-[4px]"
					key={idx}
				>
					<div className="flex items-center space-x-[4px]">
						<Skeleton
							className="h-[21px]"
							randomWidth={{ max: 64, min: 48 }}
							type="LIGHT"
						/>
						<Skeleton
							className="h-[21px] w-[21px]"
							type="LIGHT"
						/>
					</div>
					<div className="flex items-center space-x-[12px]">
						<Skeleton
							className="h-[50px] w-[50px]"
							type="LIGHT"
						/>
						<div className="flex h-full min-w-0 grow flex-col items-start space-y-[1px]">
							{Array.from({ length: Math.round(Math.random() * 2 + 1) }).map(
								(_, idx) => (
									<Skeleton
										className="h-[16px] w-[60px]"
										key={idx}
										type="LIGHT"
									/>
								)
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default CombatSkillSkeleton;

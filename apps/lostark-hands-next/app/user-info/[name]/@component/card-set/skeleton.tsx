import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import Skeleton from '@/client-component/skeleton';

const CardSetSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="grid cursor-pointer grid-cols-6 gap-[8px]">
			{Array.from({ length: 6 }).map((_, idx) => (
				<Skeleton
					key={idx}
					className="w-full pb-[146%]"
					type="LIGHT"
				/>
			))}
		</div>
	</LabelLayoutSkeleton>
);

export default CardSetSkeleton;

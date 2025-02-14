import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import ThumbnailPostSkeleton from '@/client-component/thumbnail-post/skeleton';

const EventSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="hide-scrollbar mx-[-8px] flex flex-nowrap space-x-[16px] overflow-x-scroll px-[8px]">
			{Array.from({ length: Math.ceil(Math.random() * 4 + 2) }).map(
				(_, idx) => (
					<ThumbnailPostSkeleton
						imgClassName="w-[140px] h-[67px]"
						key={idx}
					/>
				)
			)}
		</div>
	</LabelLayoutSkeleton>
);

export default EventSkeleton;

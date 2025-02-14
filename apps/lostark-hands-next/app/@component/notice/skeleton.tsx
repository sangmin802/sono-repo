import LabelLayoutSkeleton from '@/client-component/label-layout/skeleton';
import MessagePostSkeleton from '@/client-component/message-post/skeleton';

const NoticeSkeleton = () => (
	<div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
		{Array.from({ length: 3 }).map((_, idx) => (
			<LabelLayoutSkeleton
				key={idx}
				className="min-w-0 grow basis-0"
			>
				<div className="space-y-[4px]">
					{Array.from({ length: 10 }).map((_, idx) => (
						<MessagePostSkeleton key={idx} />
					))}
				</div>
			</LabelLayoutSkeleton>
		))}
	</div>
);

export default NoticeSkeleton;

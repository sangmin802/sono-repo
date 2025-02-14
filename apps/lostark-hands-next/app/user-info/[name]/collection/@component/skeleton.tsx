import cn from 'classnames';

import { LabelLayoutSkeleton } from '@/client-component/label-layout';
import Skeleton from '@/client-component/skeleton';
import { StickyElementSkeleton } from '@/client-component/sticky-element';

import { STICKY_NAV_STYLE } from './constants';

const CollectionSkeleton = () => (
	<div className="!ml-0 w-full lg:flex">
		<StickyElementSkeleton
			className={cn(
				'space-x-[4px] lg:space-x-0 lg:space-y-[4px]',
				STICKY_NAV_STYLE
			)}
			as="nav"
			top={68}
		>
			{Array.from({ length: 9 }).map((_, idx) => (
				<Skeleton
					key={idx}
					className="flex h-[50px] w-[130px] shrink-0 items-center"
				/>
			))}
		</StickyElementSkeleton>
		<LabelLayoutSkeleton className="grow">
			<div className="space-y-[4px]">
				{Array.from({ length: Math.random() * 5 + 5 }).map((_, idx) => (
					<div
						className="grid grid-cols-[1fr_2fr] gap-[16px]"
						key={idx}
					>
						<Skeleton
							className="h-[21px]"
							type="LIGHT"
							randomWidth={{ max: 100, min: 60 }}
						/>
						<Skeleton
							className="h-[21px]"
							type="LIGHT"
							randomWidth={{ max: 100, min: 60 }}
						/>
					</div>
				))}
			</div>
		</LabelLayoutSkeleton>
	</div>
);

export default CollectionSkeleton;

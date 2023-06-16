import type { FC } from 'react';
import { Suspense } from 'react';

import SectionLayout from '@/component/common/section-layout';
import UpdateHistory from '@/component/news/update-history';

const Page: FC = () => {
	return (
		<div className="lg:flex">
			<SectionLayout
				className="rounded-[4px] bg-neutral-800 md:w-[300px]"
				title="업데이트 내역"
			>
				<Suspense fallback={<>loading</>}>
					<UpdateHistory />
				</Suspense>
			</SectionLayout>
		</div>
	);
};

export default Page;

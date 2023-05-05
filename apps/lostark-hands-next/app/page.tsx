import { FC, Suspense } from 'react';

import UpdateHistory from '@/app/update-history';

import SectionLayout from '@/component/common/section-layout';

const Page: FC = () => {
	return (
		<div>
			<SectionLayout title="업데이트 내역">
				<Suspense
					fallback={
						<>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
							nesciunt quis dicta placeat corrupti hic enim fuga, deleniti ex et
							suscipit rem officiis, distinctio, incidunt amet iusto!
							Consequuntur, ipsum porro?
						</>
					}
				>
					<UpdateHistory />
				</Suspense>
			</SectionLayout>
		</div>
	);
};

export default Page;

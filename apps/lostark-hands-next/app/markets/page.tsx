import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getOptionsApi } from '@/service/markets';

import Markets from '@/app/markets/@component';

export const revalidate = 300;

const Page = () => {
	const a = 123;
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<Suspense>
				<ServerWrapper
					apiPromise={getOptionsApi()}
					render={(data) => <Markets options={data} />}
				/>
			</Suspense>
		</div>
	);
};

export default Page;

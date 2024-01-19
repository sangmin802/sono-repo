import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getOptionsApi } from '@/service/markets';

import Markets from '@/app/markets/@component';

export const revalidate = 300;

const Page = () => {
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<Suspense
				fallback={<div className="h-[200px] w-[200px] bg-lime-400">와난!!</div>}
			>
				<ServerWrapper
					apiPromise={getOptionsApi()}
					render={(data) => <Markets options={data} />}
				/>
			</Suspense>
		</div>
	);
};

export default Page;

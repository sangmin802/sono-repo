import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getSilblingsInfoApi } from '@/service/characters';
import { sliblingListSelector } from '@/service/characters/selector';

import Silblings from '@/app/user-info/[name]/silblings/@component';

const SilblingsRender = (data: ReturnType<typeof sliblingListSelector>) => (
	<Silblings data={data} />
);

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<Suspense
			fallback={<div className="h-[200px] w-[200px] bg-pink-900">와난!!</div>}
		>
			<ServerWrapper
				apiPromise={getSilblingsInfoApi(name)}
				selector={sliblingListSelector}
				render={SilblingsRender}
			/>
		</Suspense>
	);
};

export default Page;

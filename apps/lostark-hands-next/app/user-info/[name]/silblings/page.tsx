import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getSilblingsInfoApi } from '@/service/characters';
import { sliblingListSelector } from '@/service/characters/selector';

import {
	Silblings,
	SilblingsSkeleton
} from '@/app/user-info/[name]/silblings/@component';

const SilblingsRender = (data: ReturnType<typeof sliblingListSelector>) => (
	<Silblings data={data} />
);

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<Suspense fallback={<SilblingsSkeleton />}>
			<ServerWrapper
				apiPromise={getSilblingsInfoApi(name)}
				selector={sliblingListSelector}
				render={SilblingsRender}
			/>
		</Suspense>
	);
};

export default Page;

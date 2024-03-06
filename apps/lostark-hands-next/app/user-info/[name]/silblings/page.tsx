import ServerWrapper from '@/app/server-wrapper';

import { getSilblingsInfoApi } from '@/service/characters';
import { sliblingListSelector } from '@/service/characters/selector';

import {
	Silblings,
	SilblingsSkeleton
} from '@/app/user-info/[name]/silblings/@component';

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<ServerWrapper
			fallback={<SilblingsSkeleton />}
			apiPromise={getSilblingsInfoApi(name)}
			selector={sliblingListSelector}
			render={Silblings}
		/>
	);
};

export default Page;

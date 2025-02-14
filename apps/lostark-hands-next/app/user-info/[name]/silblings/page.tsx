import ServerWrapper from '@/app/server-wrapper';

import { getSilblingsInfoApi } from '@/service/characters';
import { sliblingListSelector } from '@/service/characters/selector';

import Silblings from './@component';
import SilblingsSkeleton from './@component/skeleton';

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

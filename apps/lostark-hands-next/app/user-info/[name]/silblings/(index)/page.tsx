import ServerWrapper from '@/app/server-wrapper';

import { getSilblingsInfoApi } from '@/service/characters';
import { sliblingListSelector } from '@/service/characters/selector';

import SilblingSection from './_components/silbling-section';
import SilblingsSkeleton from './_components/skeleton';

const Page = async ({ params }: { params: { name: string } }) => {
	const { name } = await params;
	return (
		<ServerWrapper
			fallback={<SilblingsSkeleton />}
			apiPromise={getSilblingsInfoApi(name)}
			selector={sliblingListSelector}
			render={SilblingSection}
		/>
	);
};

export default Page;

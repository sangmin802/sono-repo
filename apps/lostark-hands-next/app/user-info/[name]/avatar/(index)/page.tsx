import ServerWrapper from '@/app/server-wrapper';

import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import AvatarGrid from './_components/avatar-grid';
import AvatarGridSkeleton from './_components/skeleton';

const Page = async ({ params }: { params: { name: string } }) => {
	const { name } = await params;
	return (
		<ServerWrapper
			fallback={<AvatarGridSkeleton />}
			apiPromise={getAvatarApi(name)}
			selector={avatarSelector}
			render={AvatarGrid}
		/>
	);
};

export default Page;

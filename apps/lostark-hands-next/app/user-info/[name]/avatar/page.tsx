import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import {
	Avatar,
	AvatarSkeleton
} from '@/app/user-info/[name]/avatar/@component';

const AvatarRender = (data: ReturnType<typeof avatarSelector>) => (
	<Avatar data={data} />
);

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<Suspense fallback={<AvatarSkeleton />}>
			<ServerWrapper
				apiPromise={getAvatarApi(name)}
				selector={avatarSelector}
				render={AvatarRender}
			/>
		</Suspense>
	);
};

export default Page;

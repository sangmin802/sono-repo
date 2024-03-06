import ServerWrapper from '@/app/server-wrapper';

import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import {
	Avatar,
	AvatarSkeleton
} from '@/app/user-info/[name]/avatar/@component';

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<ServerWrapper
			fallback={<AvatarSkeleton />}
			apiPromise={getAvatarApi(name)}
			selector={avatarSelector}
			render={Avatar}
		/>
	);
};

export default Page;

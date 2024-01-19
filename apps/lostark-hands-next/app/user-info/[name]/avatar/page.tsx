import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import Avatar from '@/app/user-info/[name]/avatar/@component';

const AvatarRender = (data: ReturnType<typeof avatarSelector>) => (
	<Avatar data={data} />
);

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<Suspense
			fallback={<div className="h-[200px] w-[200px] bg-violet-500">와난!!</div>}
		>
			<ServerWrapper
				apiPromise={getAvatarApi(name)}
				selector={avatarSelector}
				render={AvatarRender}
			/>
		</Suspense>
	);
};

export default Page;

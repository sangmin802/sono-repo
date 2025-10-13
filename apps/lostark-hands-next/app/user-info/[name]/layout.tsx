import { type ReactElement } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getProfileInfoApi } from '@/service/armories';

import Profile from './(index)/_components/profile';
import ProfileSkeleton from './(index)/_components/profile/skeleton';
import TabList from './(index)/_components/tab-list';

/**
 * Layouts can fetch data.
 * Passing data between a parent layout and its children is not possible.
 * However, you can fetch the same data in a route more than once,
 * and React will automatically dedupe the requests without affecting performance.
 * @see{@link https://nextjs.org/docs/app/building-your-application/caching#request-memoization}
 * @returns
 */
const Layout = async ({
	children,
	params
}: {
	children: ReactElement;
	params: { name: string };
}) => {
	const { name } = await params;
	return (
		<div>
			<ServerWrapper
				fallback={<ProfileSkeleton />}
				apiPromise={getProfileInfoApi(name)}
				render={Profile}
			/>
			<div className="flex flex-col gap-y-[12px] p-[16px]">
				<TabList />
				{children}
			</div>
		</div>
	);
};

export default Layout;

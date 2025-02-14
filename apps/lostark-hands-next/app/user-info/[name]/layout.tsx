import { type ReactElement } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getProfileInfoApi } from '@/service/armories';

import Profile from './@component/profile';
import ProfileSkeleton from './@component/profile/skeleton';
import TabList from './@component/tab-list';

/**
 * Layouts can fetch data.
 * Passing data between a parent layout and its children is not possible.
 * However, you can fetch the same data in a route more than once,
 * and React will automatically dedupe the requests without affecting performance.
 * @see{@link https://nextjs.org/docs/app/building-your-application/caching#request-memoization}
 * @returns
 */
const Layout = ({
	children,
	params: { name }
}: {
	children: ReactElement;
	params: { name: string };
}) => {
	return (
		<div>
			<ServerWrapper
				fallback={<ProfileSkeleton />}
				apiPromise={getProfileInfoApi(name)}
				render={Profile}
			/>
			<div className="space-y-[12px] p-[16px]">
				<TabList />
				{children}
			</div>
		</div>
	);
};

export default Layout;

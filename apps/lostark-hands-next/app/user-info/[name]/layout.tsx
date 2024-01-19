import { type ReactElement, Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getProfileInfoApi } from '@/service/armories';

import Profile from '@/app/user-info/[name]/@component/profile';
import TabList from '@/app/user-info/[name]/@component/tab-list';

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
			<Suspense
				fallback={
					<div className="h-[400px] w-[400xp] bg-green-500">와난!@@</div>
				}
			>
				<ServerWrapper
					apiPromise={getProfileInfoApi(name)}
					render={(data) => <Profile data={data ?? undefined} />}
				/>
			</Suspense>
			<div className="space-y-[12px] p-[16px]">
				<TabList />
				{children}
			</div>
		</div>
	);
};

export default Layout;

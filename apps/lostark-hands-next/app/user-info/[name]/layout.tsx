import type { ReactElement } from 'react';

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
const Layout = async ({
	children,
	params: { name }
}: {
	children: ReactElement;
	params: { name: string };
}) => {
	const profile = await getProfileInfoApi(name);

	return (
		<div>
			{profile && <Profile data={profile} />}
			<div className="space-y-[12px] p-[16px] pb-0">
				<TabList />
				{children}
			</div>
		</div>
	);
};

export default Layout;

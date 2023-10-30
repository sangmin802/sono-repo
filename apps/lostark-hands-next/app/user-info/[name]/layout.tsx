import type { ReactElement } from 'react';

import { getProfileInfoApi } from '@/service/armories';

import Profile from '@/client-component/pages/user-info/profile';
import TabList from '@/client-component/pages/user-info/tab-list';

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
			<div className="space-y-[12px] p-[16px]">
				<TabList />
				{children}
			</div>
		</div>
	);
};

export default Layout;

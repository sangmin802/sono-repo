import ServerWrapper from '@/app/server-wrapper';

import { getOptionsApi } from '@/service/markets';

import Search from '@/app/markets/@component/search';

const Page = () => {
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<ServerWrapper
				apiPromise={getOptionsApi()}
				render={Search}
			/>
		</div>
	);
};

export default Page;

import ServerWrapper from '@/app/server-wrapper';

import { getOptionsApi } from '@/service/markets';

import Search from '@/app/markets/@component';

const Page = () => {
	return (
		<div className="flex flex-col gap-y-[16px] px-[16px] pb-[16px]">
			<ServerWrapper
				apiPromise={getOptionsApi()}
				render={Search}
			/>
		</div>
	);
};

export default Page;

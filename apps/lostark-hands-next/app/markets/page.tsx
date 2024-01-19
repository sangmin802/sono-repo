import ServerWrapper from '@/app/server-wrapper';

import { getOptionsApi } from '@/service/markets';

import Markets from '@/app/markets/@component';

export const revalidate = 300;

const Page = () => {
	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<ServerWrapper
				apiPromise={getOptionsApi()}
				render={(data) => <Markets options={data} />}
			/>
		</div>
	);
};

export default Page;

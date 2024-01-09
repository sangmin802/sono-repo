import { getOptionsApi } from '@/service/markets';

import Markets from '@/client-component/pages/markets';

export const revalidate = 300;

const Page = async () => {
	const [options] = await Promise.all([getOptionsApi()]);

	if (!options) return;

	return (
		<div className="space-y-[16px] px-[16px] pb-[16px]">
			<Markets options={options} />;
		</div>
	);
};

export default Page;

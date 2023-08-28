import { getProfileInfoApi } from '@/service/armories';
import { profileTooltipSelector } from '@/service/armories/selector';

import { pascalToCamel } from '@/util/selector';

import Stats from '@/client-component/pages/user-info/stats';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const [{ stats }] = await Promise.all([
		getProfileInfoApi(name, (data) =>
			pascalToCamel(profileTooltipSelector(data))
		)
	]);

	return (
		<div className="flex">
			<div className="w-full sm:w-[200px]">
				<Stats
					stats={stats.slice(0, 6)}
					power={stats[7]}
					healty={stats[6]}
				/>
			</div>
			<div></div>
		</div>
	);
};

export default Page;

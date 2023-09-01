import { getEngravesInfoApi, getProfileInfoApi } from '@/service/armories';
import {
	engraveSelector,
	profileTooltipSelector
} from '@/service/armories/selector';

import { pascalToCamel } from '@/util/selector';

import Engraves from '@/client-component/pages/user-info/engraves';
import Stats from '@/client-component/pages/user-info/stats';
import Tendencies from '@/client-component/pages/user-info/tendencies';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const [{ stats, tendencies }, engraves] = await Promise.all([
		getProfileInfoApi(name, (data) =>
			pascalToCamel(profileTooltipSelector(data))
		),
		getEngravesInfoApi(name, (data) => pascalToCamel(engraveSelector(data)))
	]);

	return (
		<div className="flex">
			<div className="w-full space-y-[12px] sm:w-[200px]">
				<Stats
					stats={stats.slice(0, 6)}
					power={stats[7]}
					healty={stats[6]}
				/>
				<Tendencies data={tendencies} />
				<Engraves data={engraves.effects} />
			</div>
			<div></div>
		</div>
	);
};

export default Page;

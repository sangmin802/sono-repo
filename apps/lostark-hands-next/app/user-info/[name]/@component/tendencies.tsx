import { getProfileInfoApi } from '@/service/armories';
import { profileTooltipSelector } from '@/service/armories/selector';

import Label from '@/client-component/label';

const Tendencies = async ({ name }: { name: string }) => {
	const data = await getProfileInfoApi(name);
	const { tendencies } = profileTooltipSelector(data);

	return (
		<div className="grid grid-cols-2 gap-[6px] rounded-[6px] bg-main-20 p-[8px]">
			{tendencies.map(({ type, point }) => (
				<div
					className="flex items-center space-x-[4px]"
					key={type}
				>
					<Label>{type}</Label>
					<div>{point}</div>
				</div>
			))}
		</div>
	);
};

export default Tendencies;

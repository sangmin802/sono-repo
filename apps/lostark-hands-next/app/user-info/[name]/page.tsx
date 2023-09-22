import {
	getCardApi,
	getEngravesInfoApi,
	getEquipmentApi,
	getProfileInfoApi
} from '@/service/armories';
import {
	cardSelector,
	engraveSelector,
	equipmentSelector,
	profileTooltipSelector
} from '@/service/armories/selector';

import CardSet from '@/client-component/pages/user-info/card-set';
import Engraves from '@/client-component/pages/user-info/engraves';
import Equipment from '@/client-component/pages/user-info/equipment';
import Stats from '@/client-component/pages/user-info/stats';
import Tendencies from '@/client-component/pages/user-info/tendencies';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const [profile, effects, equipment, card] = await Promise.all([
		getProfileInfoApi(name),
		getEngravesInfoApi(name),
		getEquipmentApi(name),
		getCardApi(name)
	]);

	const { stats, tendencies } = profileTooltipSelector({ ...profile });
	const filteredEffects = engraveSelector(effects) ?? undefined;
	const filteredEquipment = equipmentSelector(equipment);
	const filteredCard = cardSelector(card);

	return (
		<div className="space-y-[16px] sm:flex sm:space-x-[16px] sm:space-y-0">
			<div className="w-full space-y-[12px] sm:w-[200px] sm:shrink-0">
				<Stats
					stats={stats.slice(0, 6)}
					power={stats[7]}
					healty={stats[6]}
				/>
				<Tendencies data={tendencies} />
				<Engraves data={filteredEffects} />
			</div>
			<div className="w-full space-y-[16px] sm:w-auto sm:grow">
				<Equipment data={filteredEquipment} />
				<CardSet {...filteredCard} />
			</div>
		</div>
	);
};

export default Page;

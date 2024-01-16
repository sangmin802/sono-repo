import {
	getCardApi,
	getEngravesInfoApi,
	getEquipmentApi,
	getGemApi,
	getProfileInfoApi,
	getSkillApi
} from '@/service/armories';
import {
	cardSelector,
	engraveSelector,
	equipmentSelector,
	gemSelector,
	profileTooltipSelector,
	skillSelector
} from '@/service/armories/selector';

import CardSet from '@/app/user-info/[name]/@component/card-set';
import CombatSkill from '@/app/user-info/[name]/@component/combat-skill';
import Engraves from '@/app/user-info/[name]/@component/engraves';
import Equipment from '@/app/user-info/[name]/@component/equipment';
import Gem from '@/app/user-info/[name]/@component/gem';
import Stats from '@/app/user-info/[name]/@component/stats';
import Tendencies from '@/app/user-info/[name]/@component/tendencies';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const [profile, engrave, equipment, card, skill, gem] = await Promise.all([
		getProfileInfoApi(name),
		getEngravesInfoApi(name),
		getEquipmentApi(name),
		getCardApi(name),
		getSkillApi(name),
		getGemApi(name)
	]);

	const { stats, tendencies } = profileTooltipSelector({ ...profile });
	const filteredEffects = engraveSelector(engrave) ?? undefined;
	const { equip, acc } = equipmentSelector(equipment);
	const filteredCard = cardSelector(card);
	const filteredSkill = skillSelector(skill);
	const filteredGem = gemSelector(gem);

	return (
		<div className="space-y-[16px] md:flex md:space-x-[16px] md:space-y-0">
			<div className="w-full space-y-[12px] md:w-[200px] md:shrink-0">
				<Stats
					stats={stats.slice(0, 6)}
					power={stats[7]}
					healty={stats[6]}
				/>
				<Tendencies data={tendencies} />
				<Engraves data={filteredEffects} />
			</div>
			<div className="w-full space-y-[16px] md:w-auto md:grow">
				<Equipment data={{ equip, acc }} />
				<CardSet {...filteredCard} />
				<Gem data={filteredGem} />
				<CombatSkill data={filteredSkill} />
			</div>
		</div>
	);
};

export default Page;

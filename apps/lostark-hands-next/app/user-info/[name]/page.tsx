import ServerWrapper from '@/app/server-wrapper';

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

import {
	CardSet,
	CardSetSkeleton
} from '@/app/user-info/[name]/@component/card-set';
import {
	CombatSkill,
	CombatSkillSkeleton
} from '@/app/user-info/[name]/@component/combat-skill';
import {
	Engraves,
	EngravesSkeleton
} from '@/app/user-info/[name]/@component/engraves';
import {
	Equipment,
	EquipmentSkeleton
} from '@/app/user-info/[name]/@component/equipment';
import { Gem, GemSkeleton } from '@/app/user-info/[name]/@component/gem';
import { Stats, StatsSkeleton } from '@/app/user-info/[name]/@component/stats';
import {
	Tendencies,
	TendenciesSkeleton
} from '@/app/user-info/[name]/@component/tendencies';

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<div className="space-y-[16px] md:flex md:space-x-[16px] md:space-y-0">
			<div className="w-full space-y-[12px] md:w-[240px] md:shrink-0">
				<ServerWrapper
					fallback={<StatsSkeleton />}
					apiPromise={getProfileInfoApi(name)}
					selector={profileTooltipSelector}
					render={Stats}
				/>
				<ServerWrapper
					fallback={<TendenciesSkeleton />}
					apiPromise={getProfileInfoApi(name)}
					selector={profileTooltipSelector}
					render={Tendencies}
				/>
				<ServerWrapper
					fallback={<EngravesSkeleton />}
					apiPromise={getEngravesInfoApi(name)}
					selector={engraveSelector}
					render={Engraves}
				/>
			</div>
			<div className="w-full space-y-[16px] md:w-auto md:grow">
				<ServerWrapper
					fallback={<EquipmentSkeleton />}
					apiPromise={getEquipmentApi(name)}
					selector={equipmentSelector}
					render={Equipment}
				/>
				<ServerWrapper
					fallback={<CardSetSkeleton />}
					apiPromise={getCardApi(name)}
					selector={cardSelector}
					render={CardSet}
				/>
				<ServerWrapper
					fallback={<GemSkeleton />}
					apiPromise={getGemApi(name)}
					selector={gemSelector}
					render={Gem}
				/>
				<ServerWrapper
					fallback={<CombatSkillSkeleton />}
					apiPromise={getSkillApi(name)}
					selector={skillSelector}
					render={CombatSkill}
				/>
			</div>
		</div>
	);
};

export default Page;

import ServerWrapper from '@/app/server-wrapper';

import {
	getArkPassiveApi,
	getCardApi,
	getEngravesInfoApi,
	getEquipmentApi,
	getGemApi,
	getProfileInfoApi,
	getSkillApi
} from '@/service/armories';
import {
	arkPassiveSelector,
	cardSelector,
	engraveSelector,
	equipmentSelector,
	gemSelector,
	profileTooltipSelector,
	skillSelector
} from '@/service/armories/selector';

import {
	ArkPassiveCollapse,
	ArkPassiveSkeleton
} from '@/app/user-info/[name]/@component/ark-passive';
import {
	EngraveCollapse,
	EngraveSkeleton
} from '@/app/user-info/[name]/@component/engrave';

import CardSet from './@component/card-set';
import CardSetSkeleton from './@component/card-set/skeleton';
import CombatSkill from './@component/combat-skill';
import CombatSkillSkeleton from './@component/combat-skill/skeleton';
import Equipment from './@component/equipment';
import EquipmentSkeleton from './@component/equipment/skeleton';
import Gem from './@component/gem';
import GemSkeleton from './@component/gem/skeleton';
import Stats from './@component/stats';
import StatsSkeleton from './@component/stats/skeleton';
import Tendencies from './@component/tendencies';
import TendenciesSkeleton from './@component/tendencies/skeleton';

const Page = async ({ params }: { params: { name: string } }) => {
	const { name } = await params;
	return (
		<div className="flex flex-col gap-y-[16px] md:flex-row md:gap-x-[16px] md:gap-y-0">
			<div className="flex w-full flex-col gap-y-[12px] md:w-[240px] md:shrink-0">
				<ServerWrapper
					fallback={<StatsSkeleton />}
					apiPromise={getProfileInfoApi(name)}
					selector={profileTooltipSelector}
					render={Stats}
				/>
				<ServerWrapper
					fallback={<EngraveSkeleton />}
					apiPromise={getEngravesInfoApi(name)}
					selector={engraveSelector}
					render={EngraveCollapse}
				/>
				<ServerWrapper
					fallback={<TendenciesSkeleton />}
					apiPromise={getProfileInfoApi(name)}
					selector={profileTooltipSelector}
					render={Tendencies}
				/>
			</div>
			<div className="flex w-full flex-col gap-y-[16px] md:w-auto md:grow">
				<ServerWrapper
					fallback={<EquipmentSkeleton />}
					apiPromise={getEquipmentApi(name)}
					selector={equipmentSelector}
					render={Equipment}
				/>
				<ServerWrapper
					fallback={<GemSkeleton />}
					apiPromise={getGemApi(name)}
					selector={gemSelector}
					render={Gem}
				/>
				<ServerWrapper
					fallback={<ArkPassiveSkeleton />}
					apiPromise={getArkPassiveApi(name)}
					selector={arkPassiveSelector}
					render={ArkPassiveCollapse}
				/>
				<ServerWrapper
					fallback={<CombatSkillSkeleton />}
					apiPromise={getSkillApi(name)}
					selector={skillSelector}
					render={CombatSkill}
				/>
				<ServerWrapper
					fallback={<CardSetSkeleton />}
					apiPromise={getCardApi(name)}
					selector={cardSelector}
					render={CardSet}
				/>
			</div>
		</div>
	);
};

export default Page;

import ServerWrapper from '@/app/server-wrapper';

import {
	getArkGridApi,
	getArkPassiveApi,
	getCardApi,
	getEngravesInfoApi,
	getEquipmentApi,
	getGemApi,
	getProfileInfoApi,
	getSkillApi
} from '@/service/armories';
import {
	arkGridSelector,
	arkPassiveSelector,
	cardSelector,
	engraveSelector,
	equipmentSelector,
	gemSelector,
	profileTooltipSelector,
	skillSelector
} from '@/service/armories/selector';

import ArkGrid from './_components/ark-grid';
import ArkPassiveCollapse from './_components/ark-passive/ark-passive-collapse';
import ArkPassiveSkeleton from './_components/ark-passive/skeleton';
import CardSet from './_components/card-set';
import CardSetSkeleton from './_components/card-set/skeleton';
import CombatSkill from './_components/combat-skill';
import CombatSkillSkeleton from './_components/combat-skill/skeleton';
import EngraveCollapse from './_components/engrave/engrave-collapse';
import EngraveSkeleton from './_components/engrave/skeleton';
import Equipment from './_components/equipment';
import EquipmentSkeleton from './_components/equipment/skeleton';
import Gem from './_components/gem';
import GemSkeleton from './_components/gem/skeleton';
import Stats from './_components/stats';
import StatsSkeleton from './_components/stats/skeleton';
import Tendencies from './_components/tendencies';
import TendenciesSkeleton from './_components/tendencies/skeleton';

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
			<div className="flex w-full flex-col gap-y-[16px] md:w-auto md:min-w-0 md:grow">
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
					fallback={<ArkPassiveSkeleton />}
					apiPromise={getArkGridApi(name)}
					selector={arkGridSelector}
					render={ArkGrid}
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

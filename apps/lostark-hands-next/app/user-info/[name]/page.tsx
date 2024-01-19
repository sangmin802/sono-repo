import { Suspense } from 'react';

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

const StatsRender = ({ stats }: ReturnType<typeof profileTooltipSelector>) => (
	<Stats
		stats={stats.slice(0, 6)}
		power={stats[7]}
		healty={stats[6]}
	/>
);

const EngravesRender = (data: ReturnType<typeof engraveSelector>) => (
	<Engraves data={data ?? undefined} />
);

const EquipmentRender = (data: ReturnType<typeof equipmentSelector>) => (
	<Equipment data={data} />
);

const CardSetRender = (data: ReturnType<typeof cardSelector>) => (
	<CardSet {...data} />
);

const GemRender = (data: ReturnType<typeof gemSelector>) => <Gem data={data} />;

const CombatSkillRender = (data: ReturnType<typeof skillSelector>) => (
	<CombatSkill data={data} />
);

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<div className="space-y-[16px] md:flex md:space-x-[16px] md:space-y-0">
			<div className="w-full space-y-[12px] md:w-[200px] md:shrink-0">
				<Suspense fallback={<StatsSkeleton />}>
					<ServerWrapper
						apiPromise={getProfileInfoApi(name)}
						selector={profileTooltipSelector}
						render={StatsRender}
					/>
				</Suspense>
				<Suspense fallback={<TendenciesSkeleton />}>
					<Tendencies name={name} />
				</Suspense>
				<Suspense fallback={<EngravesSkeleton />}>
					<ServerWrapper
						apiPromise={getEngravesInfoApi(name)}
						selector={engraveSelector}
						render={EngravesRender}
					/>
				</Suspense>
			</div>
			<div className="w-full space-y-[16px] md:w-auto md:grow">
				<Suspense fallback={<EquipmentSkeleton />}>
					<ServerWrapper
						apiPromise={getEquipmentApi(name)}
						selector={equipmentSelector}
						render={EquipmentRender}
					/>
				</Suspense>
				<Suspense fallback={<CardSetSkeleton />}>
					<ServerWrapper
						apiPromise={getCardApi(name)}
						selector={cardSelector}
						render={CardSetRender}
					/>
				</Suspense>
				<Suspense fallback={<GemSkeleton />}>
					<ServerWrapper
						apiPromise={getGemApi(name)}
						selector={gemSelector}
						render={GemRender}
					/>
				</Suspense>
				<Suspense fallback={<CombatSkillSkeleton />}>
					<ServerWrapper
						apiPromise={getSkillApi(name)}
						selector={skillSelector}
						render={CombatSkillRender}
					/>
				</Suspense>
			</div>
		</div>
	);
};

export default Page;

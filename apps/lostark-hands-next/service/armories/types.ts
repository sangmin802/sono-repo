import type { TGrade } from '@/type';
import type { TElementUnionArray } from '@/type/element-json';

export interface IStat {
	type: string;
	value: string;
	tooltip: string[];
}

export interface ITendency {
	type: string;
	point: number;
	maxPoint: number;
}

export type TArkPassiveKey = 'enlightenment' | 'evolution' | 'leap';
export enum ArkPassiveType {
	Enlightenment = '깨달음',
	Evolution = '진화',
	Leap = '도약'
}

interface DefaultArkPassive {
	isArkPassive: boolean;
	points: {
		name: ArkPassiveType;
		value: number;
		tooltip: string;
	}[];
}

export interface IArkPassive extends DefaultArkPassive {
	effects: {
		name: TArkPassiveKey;
		description: string;
		icon: string;
		toolTip: string;
	}[];
}

export interface ISelectedArkPassive extends DefaultArkPassive {
	effects: Record<
		TArkPassiveKey,
		{
			name: ArkPassiveType;
			description: string;
			icon: string;
			toolTip: TElementUnionArray;
		}[]
	>;
}

interface ISkillTripod {
	tier: number;
	slot: number;
	name: string;
	icon: string;
	level: number;
	isSelected: boolean;
	tooltip: string;
}

interface ISkillRune {
	name: string;
	icon: string;
	grade: TGrade;
	tooltip: string;
}

interface IEngraving {
	slot: number;
	name: string;
	icon: string;
	tooltip: string;
}

export interface IArkPassiveEffects {
	abilityStoneLevel: null | number;
	grade: TGrade;
	level: number;
	name: string;
	description: string;
}

export interface IEffect {
	icon: string;
	name: string;
	description: string;
	point?: string;
}

export interface ICard {
	slot: number;
	name: string;
	icon: string;
	awakeCount: number;
	awakeTotal: number;
	grade: TGrade;
	tooltip: string;
}

export interface ICardEffect {
	index: number;
	cardSlots: number[];
	items: IEffect[];
}

export interface IGem {
	slot: number;
	name: string;
	icon: string;
	level: number;
	grade: TGrade;
	tooltip: string;
}

export interface IParsedGem extends Omit<IGem, 'tooltip'> {
	tooltip: TElementUnionArray;
}

interface IGemEffect {
	description: string;
	sktill: {
		gemSlot: number;
		name: string;
		description: string[];
		option: string;
		icon: string;
		tooltip: string;
	}[];
}

interface IAggregationTeamDeathMatchRank {
	rank: number;
	rankName: string;
	rankIcon: string;
	rankLastMmr: number;
	playCount: number;
	victoryCount: number;
	loseCount: number;
	tieCount: number;
	killCount: number;
	aceCount: number;
	deathCount: number;
}

interface IAggregation {
	playCount: number;
	victoryCount: number;
	loseCount: number;
	tieCount: number;
	killCount: number;
	aceCount: number;
	deathCount: number;
}

interface IAggregationElimination {
	firstWinCount: number;
	secondWinCount: number;
	thirdWinCount: number;
	firstPlayCount: number;
	secondPlayCount: number;
	thirdPlayCount: number;
	allKillCount: number;
	playCount: number;
	victoryCount: number;
	loseCount: number;
	tieCount: number;
	killCount: number;
	aceCount: number;
	deathCount: number;
}

interface IColosseum {
	seasonName: string;
	competitive: IAggregationTeamDeathMatchRank;
	teamDeathmatch: IAggregation;
	deathmatch: IAggregation;
	teamElimination: IAggregationElimination;
	coOpBattle: IAggregation;
}

export interface ICollectiblePoint {
	pointName: string;
	point: number;
	maxPoint: number;
}

export interface IArmoryProfile {
	characterImage?: string;
	expeditionLevel: number;
	pvpGradeName: string;
	townLevel: number | null;
	townName: string;
	title: string;
	guildMemberGrade: string;
	guildName: string;
	usingSkillPoint: number;
	totalSkillPoint: number;
	stats: IStat[];
	tendencies: ITendency[];
	serverName: string;
	characterName: string;
	characterLevel: number;
	characterClassName: string;
	itemAvgLevel: string;
	itemMaxLevel: string;
}

export interface IArmoryEquipment {
	type: string;
	name: string;
	icon: string;
	grade: TGrade;
	tooltip: string;
}

export interface ISelectedArmoryEquipment extends IArmoryEquipment {
	levelInfo: string;
	quality: number;
	elixir?: string[];
	advancedReinforce?: string;
	transcendence?: {
		grade: string;
		total: string;
	};
	polishingEffect?: string[];
}

export interface IArmoryAvatar {
	type: string;
	name: string;
	icon: string;
	grade: TGrade;
	isSet: boolean;
	isInner: boolean;
	tooltip: string;
}

export type TParsedArmory<T> = Omit<T, 'tooltip'> & {
	tooltip?: TElementUnionArray;
};

export interface IArmorySkill {
	name: string;
	icon: string;
	level: number;
	type: string;
	isAwakening: boolean;
	tripods: ISkillTripod[];
	rune: ISkillRune | null;
	tooltip: string;
	/**
	 * 0: 일반 스킬
	 * 1: 초각성 스킬
	 * 100: 각성
	 * 101: 초각성
	 */
	skillType: 0 | 1 | 100 | 101;
}

export interface IArmoryEngraving {
	engravings: IEngraving[] | null;
	effects: IEffect[] | null;
	arkPassiveEffects: IArkPassiveEffects[] | null;
}

export interface IArmoryCard {
	cards: ICard[];
	effects: ICardEffect[];
}

export interface IArmoryGem {
	gems: IGem[];
	effects: IGemEffect;
}

interface IColosseumInfo {
	rank: number;
	preRank: number;
	exp: number;
	colosseums: IColosseum;
}

export type TCollectibleType =
	| '거인의 심장'
	| '섬의 마음'
	| '모코코 씨앗'
	| '위대한 미술품'
	| '항해 모험물'
	| '세계수의 잎'
	| '이그네아의 징표'
	| '오르페우스의 별'
	| '기억의 오르골'
	| '크림스네일의 해도';

export interface ICollectible {
	type: TCollectibleType;
	icon: string;
	point: number;
	maxPoint: number;
	collectiblePoints: ICollectiblePoint[];
}

export interface IArmoriesInfo {
	armoryAvatars: IArmoryAvatar[];
	armoryCard: IArmoryCard;
	armoryEngraving: IArmoryEngraving | null;
	armoryEquipment: IArmoryEquipment[] | null;
	armoryGem: IArmoryGem;
	armoryProfile: IArmoryProfile;
	armorySkills: IArmorySkill[];
	collectibles: ICollectible[];
	colosseumInfo: IColosseumInfo;
}

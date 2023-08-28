import type { ToIndexSignature } from '@/type';

export interface IStat {
	Type: string;
	Value: string;
	Tooltip: string[];
}

export interface ITendency {
	Type: string;
	Point: number;
	MaxPoint: number;
}

interface ISkillTripod {
	Tier: number;
	Slot: number;
	Name: string;
	Icon: string;
	Level: number;
	IsSelected: boolean;
	Tooltip: string;
}

interface ISkillRune {
	Name: string;
	Icon: string;
	Grade: string;
	Tooltip: string;
}

interface IEngraving {
	Slot: number;
	Name: string;
	Icon: string;
	Tooltip: string;
}

interface IEffect {
	Name: string;
	Description: string;
}

interface ICard {
	Slot: number;
	Name: string;
	Icon: string;
	AwakeCount: number;
	AwakeTotal: number;
	Grade: string;
	Tooltip: string;
}

interface ICardEffect {
	Index: number;
	CardSlots: number[];
	Items: IEffect[];
}

interface IGem {
	Slot: number;
	Name: string;
	Icon: string;
	Level: number;
	Grade: string;
	Tooltip: string;
}

interface IGemEffect {
	GemSlot: number;
	Name: string;
	Description: string;
	Icon: string;
	Tooltip: string;
}

interface IAggregationTeamDeathMatchRank {
	Rank: number;
	RankName: string;
	RankIcon: string;
	RankLastMmr: number;
	PlayCount: number;
	VictoryCount: number;
	LoseCount: number;
	TieCount: number;
	KillCount: number;
	AceCount: number;
	DeathCount: number;
}

interface IAggregation {
	PlayCount: number;
	VictoryCount: number;
	LoseCount: number;
	TieCount: number;
	KillCount: number;
	AceCount: number;
	DeathCount: number;
}

interface IAggregationElimination {
	FirstWinCount: number;
	SecondWinCount: number;
	ThirdWinCount: number;
	FirstPlayCount: number;
	SecondPlayCount: number;
	ThirdPlayCount: number;
	AllKillCount: number;
	PlayCount: number;
	VictoryCount: number;
	LoseCount: number;
	TieCount: number;
	KillCount: number;
	AceCount: number;
	DeathCount: number;
}

interface IColosseum {
	SeasonName: string;
	Competitive: IAggregationTeamDeathMatchRank;
	TeamDeathmatch: IAggregation;
	Deathmatch: IAggregation;
	TeamElimination: IAggregationElimination;
	CoOpBattle: IAggregation;
}

interface ICollectiblePoint {
	PointName: string;
	Point: number;
	MaxPoint: number;
}

export interface IArmoryProfile {
	CharacterImage: string;
	ExpeditionLevel: number;
	PvpGradeName: string;
	TownLevel: number | null;
	TownName: string;
	Title: string;
	GuildMemberGrade: string;
	GuildName: string;
	UsingSkillPoint: number;
	TotalSkillPoint: number;
	Stats: IStat[];
	Tendencies: ITendency[];
	ServerName: string;
	CharacterName: string;
	CharacterLevel: number;
	CharacterClassName: string;
	ItemAvgLevel: string;
	ItemMaxLevel: string;
}

interface IArmoryEquipment {
	Type: string;
	Name: string;
	Icon: string;
	Grade: string;
	Tooltip: string;
}

interface IArmoryAvatar {
	Type: string;
	Name: string;
	Icon: string;
	Grade: string;
	IsSet: boolean;
	IsInner: boolean;
	Tooltip: string;
}

interface IArmorySkill {
	Name: string;
	Icon: string;
	Level: number;
	Type: string;
	IsAwakening: boolean;
	Tripods: ISkillTripod;
	Rune: ISkillRune;
	Tooltip: string;
}

interface IArmoryEngraving {
	Engravings: IEngraving;
	Effects: IEffect;
}

interface IArmoryCard {
	Cards: ICard[];
	Effects: ICardEffect[];
}

interface IArmoryGem {
	Gems: IGem;
	Effects: IGemEffect;
}

interface IColosseumInfo {
	Rank: number;
	PreRank: number;
	Exp: number;
	Colosseums: IColosseum;
}

interface ICollectible {
	Type: string;
	Icon: string;
	Point: number;
	MaxPoint: number;
	CollectiblePoints: ICollectiblePoint[];
}

export interface IArmoriesInfo {
	ArmoryAvatars: IArmoryAvatar[];
	ArmoryCard: ToIndexSignature<IArmoryCard>;
	ArmoryEngraving: IArmoryEngraving;
	ArmoryEquipment: IArmoryEquipment[];
	ArmoryGem: IArmoryGem;
	ArmoryProfile: IArmoryProfile;
	ArmorySkills: IArmorySkill[];
	Collectibles: ICollectible[];
	ColosseumInfo: IColosseumInfo;
}

import type {
	IArkPassive,
	IArmoriesInfo,
	IArmoryAvatar,
	IArmoryCard,
	IArmoryEquipment,
	IArmoryGem,
	IArmoryProfile,
	IArmorySkill,
	ICollectible
} from '@/service/armories/types';
import type { IArmoryEngraving } from '@/service/armories/types';
import axiosInstance from '@/service/axios';

import { pascalToCamel, pascalToCamelInArray } from '@/util/selector';

import type { ToPascalKey } from '@/type';

/**
 * @description get armories info
 */
export const getArmoriesInfoApi = async (
	name: string
): Promise<IArmoriesInfo | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoriesInfo> | null>(`armories/characters/${name}`)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamel(data) : data
			}))
	).data;

/**
 * @description get profile info
 */
export const getProfileInfoApi = async (
	name: string
): Promise<IArmoryProfile | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoryProfile> | null>(
				`armories/characters/${name}/profiles`
			)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamel(data) : data
			}))
	).data;

/**
 * @description get engraves info
 */
export const getEngravesInfoApi = async (
	name: string
): Promise<IArmoryEngraving | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoryEngraving> | null>(
				`armories/characters/${name}/engravings`
			)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamel(data) : data
			}))
	).data;

/**
 * @description get equipment info
 */
export const getEquipmentApi = async (
	name: string
): Promise<IArmoryEquipment[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoryEquipment>[] | null>(
				`armories/characters/${name}/equipment`
			)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamelInArray(data) : data
			}))
	).data;

/**
 * @description get card info
 */
export const getCardApi = async (name: string): Promise<IArmoryCard | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoryCard> | null>(`armories/characters/${name}/cards`)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamel(data) : data
			}))
	).data;

/**
 * @description get skill info
 */
export const getSkillApi = async (
	name: string
): Promise<IArmorySkill[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmorySkill>[] | null>(
				`armories/characters/${name}/combat-skills`
			)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamelInArray(data) : data
			}))
	).data;

/**
 * @description get gem info
 */
export const getGemApi = async (name: string): Promise<IArmoryGem | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoryGem> | null>(`armories/characters/${name}/gems`)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamel(data) : data
			}))
	).data;

/**
 * @description get collectible info
 */
export const getCollectibleApi = async (
	name: string
): Promise<ICollectible[]> =>
	(
		await axiosInstance
			.get<ToPascalKey<ICollectible>[]>(
				`armories/characters/${name}/collectibles`
			)
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data ?? [])
			}))
	).data;

/**
 * @description get arvatar info
 */
export const getAvatarApi = async (name: string): Promise<IArmoryAvatar[]> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArmoryAvatar>[]>(`armories/characters/${name}/avatars`)
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data ?? [])
			}))
	).data;

/**
 * @description 아크패시브 정보
 */
export const getArkPassiveApi = async (name: string): Promise<IArkPassive> =>
	(
		await axiosInstance
			.get<ToPascalKey<IArkPassive>>(`armories/characters/${name}/arkPassive`)
			.then((resolve) => ({
				...resolve,
				data: pascalToCamel(resolve.data)
			}))
	).data;

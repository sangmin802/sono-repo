import type {
	IArmoriesInfo,
	IArmoryEquipment,
	IArmoryProfile
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
			.then((resolve) => ({
				...resolve,
				data: pascalToCamel(resolve.data)
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
			.then((resolve) => ({
				...resolve,
				data: pascalToCamel(resolve.data)
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
			.then((resolve) => ({
				...resolve,
				data: pascalToCamel(resolve.data)
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
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data)
			}))
	).data;

import type {
	IArmoriesInfo,
	IArmoryEngraving,
	IArmoryEquipment,
	IArmoryProfile
} from '@/service/armories/types';
import axiosInstance from '@/service/axios';

import type { ToIndexSignatureRecursive } from '@/type';

/**
 * @description get armories info
 */
export const getArmoriesInfoApi = async <ReturnType>(
	name: string,
	selector?: (data: ToIndexSignatureRecursive<IArmoriesInfo>) => ReturnType
): Promise<typeof selector extends undefined ? IArmoriesInfo : ReturnType> =>
	(
		await axiosInstance.get(`armories/characters/${name}`).then((resolve) => ({
			...resolve,
			data: selector ? selector(resolve.data) : resolve.data
		}))
	).data;

/**
 * @description get profile info
 */
export const getProfileInfoApi = async <ReturnType>(
	name: string,
	selector?: (data: ToIndexSignatureRecursive<IArmoryProfile>) => ReturnType
): Promise<typeof selector extends undefined ? IArmoryProfile : ReturnType> =>
	(
		await axiosInstance
			.get(`armories/characters/${name}/profiles`)
			.then((resolve) => ({
				...resolve,
				data: selector ? selector(resolve.data) : resolve.data
			}))
	).data;

/**
 * @description get engraves info
 */
export const getEngravesInfoApi = async <ReturnType>(
	name: string,
	selector?: (
		data: ToIndexSignatureRecursive<IArmoryEngraving> | null
	) => ReturnType
): Promise<
	typeof selector extends undefined ? IArmoryEngraving | null : ReturnType
> =>
	(
		await axiosInstance
			.get(`armories/characters/${name}/engravings`)
			.then((resolve) => ({
				...resolve,
				data: selector ? selector(resolve.data) : resolve.data
			}))
	).data;

/**
 * @description get equipment info
 */
export const getEquipmentApi = async <ReturnType>(
	name: string,
	selector?: (
		data: ToIndexSignatureRecursive<IArmoryEquipment>[] | null
	) => ReturnType
): Promise<
	typeof selector extends undefined ? IArmoryEquipment[] | null : ReturnType
> =>
	(
		await axiosInstance
			.get(`armories/characters/${name}/equipment`)
			.then((resolve) => ({
				...resolve,
				data: selector ? selector(resolve.data) : resolve.data
			}))
	).data;

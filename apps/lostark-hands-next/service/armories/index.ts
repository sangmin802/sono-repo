import type {
	IArmoriesInfo,
	IArmoryEngraving,
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
	selector?: (data: ToIndexSignatureRecursive<IArmoryEngraving>) => ReturnType
): Promise<typeof selector extends undefined ? IArmoryEngraving : ReturnType> =>
	(
		await axiosInstance
			.get(`armories/characters/${name}/engravings`)
			.then((resolve) => ({
				...resolve,
				data: selector ? selector(resolve.data) : resolve.data
			}))
	).data;

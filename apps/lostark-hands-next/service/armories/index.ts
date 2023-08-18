import type { IArmoriesInfo } from '@/service/armories/types';
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

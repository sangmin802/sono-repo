import axiosInstance from '@/service/axios';
import type { ICharacterInfo } from '@/service/characters/types';

import { pascalToCamelInArray } from '@/util/selector';

import type { ToPascalKey } from '@/type';

/**
 * @description get silblings info
 */
export const getSilblingsInfoApi = async (
	name: string
): Promise<ICharacterInfo[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<ICharacterInfo>[] | null>(`characters/${name}/siblings`)
			.then((resolve) => ({
				...resolve,
				data: pascalToCamelInArray(resolve.data)
			}))
	).data;

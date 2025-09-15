import axiosInstance from '@/service/axios';
import type { ICharacterInfo } from '@/service/characters/_types';

import { pascalToCamelInArray } from '@/utils';

import type { ToPascalKey } from '@/types';

/**
 * @description get silblings info
 */
export const getSilblingsInfoApi = async (
	name: string
): Promise<ICharacterInfo[] | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<ICharacterInfo>[] | null>(`characters/${name}/siblings`)
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamelInArray(data) : data
			}))
	).data;

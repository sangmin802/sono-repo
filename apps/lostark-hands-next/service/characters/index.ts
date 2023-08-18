import axiosInstance from '@/service/axios';
import type { ICharacterInfo } from '@/service/characters/types';

import type { ToIndexSignature } from '@/type';

/**
 * @description get characters info
 */
export const getCharactersInfoApi = async <ReturnType>(
	name: string,
	selector?: (data: ToIndexSignature<ICharacterInfo>[]) => ReturnType
): Promise<typeof selector extends undefined ? ICharacterInfo[] : ReturnType> =>
	(
		await axiosInstance.get(`characters/${name}/siblings`).then((resolve) => ({
			...resolve,
			data: selector ? selector(resolve.data) : resolve.data
		}))
	).data;

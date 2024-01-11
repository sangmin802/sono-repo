import axiosInstance from '@/service/axios';
import type {
	IMarketsFilter,
	IOptions,
	IResponseItemList
} from '@/service/markets/types';

import { camelToPascal, pascalToCamel } from '@/util/selector';

import type { ToIndexSignature, ToPascalKey } from '@/type';

/**
 * @description get option
 */
export const getOptionsApi = async (): Promise<IOptions | null> =>
	(
		await axiosInstance
			.get<ToPascalKey<IOptions> | null>('/markets/options')
			.then((resolve) => ({
				...resolve,
				data: pascalToCamel(resolve.data)
			}))
	).data;

/**
 * @description get item list
 */
export const getItemListApi = async (
	params: ToIndexSignature<IMarketsFilter>
): Promise<IResponseItemList> =>
	(
		await axiosInstance
			.post<ToPascalKey<IResponseItemList>>('/markets/items', {
				...camelToPascal(params)
			})
			.then((resolve) => ({
				...resolve,
				/**
				 * @todo pascalToCamel 내에서 null 반환식 제거하고, 외부에서 처리하도록 변경하기
				 */
				data: pascalToCamel(resolve.data) as IResponseItemList
			}))
	).data;

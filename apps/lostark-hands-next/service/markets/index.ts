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
export const getOptionsApi = async (): Promise<IOptions> =>
	(
		await axiosInstance
			.get<ToPascalKey<IOptions>>('/markets/options')
			.then(({ data, ...resolve }) => ({
				...resolve,
				data: data ? pascalToCamel(data) : data
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
				data: pascalToCamel(resolve.data)
			}))
	).data;

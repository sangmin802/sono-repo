import type { ToCamelKey } from '@/type';
import type { TElement, TElementUnionArray } from '@/type/element-json';

export const getIndentContent = (key: string, tooltip?: TElementUnionArray) =>
	tooltip?.find(
		({ type, value }) =>
			type === 'IndentStringGroup' && value.Element_000?.topStr?.includes(key)
	) as ToCamelKey<TElement['IndentStringGroup']> | undefined;

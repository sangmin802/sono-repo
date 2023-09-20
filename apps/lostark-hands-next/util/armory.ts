import type { ToCamelKey } from '@/type';
import type { TElement, TElementUnionArray } from '@/type/element-json';

export const getIndentContent = (
	key: string,
	tooltip?: ToCamelKey<TElementUnionArray>
) =>
	tooltip?.find(
		({ type, value }) =>
			type === 'IndentStringGroup' && value.element_000?.topStr?.includes(key)
	) as ToCamelKey<TElement['IndentStringGroup']> | undefined;

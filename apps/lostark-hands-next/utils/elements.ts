import type { TElement, TElementUnionArray } from '@/types/element-json';

export const getIndentContent = (key: string, tooltip?: TElementUnionArray) =>
	tooltip?.find(
		({ type, value }) =>
			type === 'IndentStringGroup' && value?.Element_000?.topStr?.includes(key)
	) as TElement['IndentStringGroup'] | undefined;

export const getSingleTextBox = (key: string, tooltip?: TElementUnionArray) =>
	tooltip?.find(
		({ type, value }) => type === 'SingleTextBox' && value?.includes(key)
	) as TElement['SingleTextBox'] | undefined;

export const getItemPartBox = (key: string, tooltip?: TElementUnionArray) =>
	tooltip?.find(
		({ type, value }) =>
			type === 'ItemPartBox' && value?.Element_000.includes(key)
	) as TElement['ItemPartBox'] | undefined;

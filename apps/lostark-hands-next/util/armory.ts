import { removeHtmlTag } from '@sono-repo/util/convert';

import type { TElement, TElementUnionArray } from '@/type/element-json';

export const getIndentContent = (key: string, tooltip?: TElementUnionArray) =>
	tooltip?.find(
		({ type, value }) =>
			type === 'IndentStringGroup' && value.Element_000?.topStr?.includes(key)
	) as TElement['IndentStringGroup'] | undefined;

export const getElixir = (tooltip: TElementUnionArray) => {
	const elixir = getIndentContent('엘릭서 효과', tooltip);

	return elixir
		? Object.values(elixir.value.Element_000.contentStr).map(({ contentStr }) =>
				removeHtmlTag(contentStr.split('</FONT>')[1])
		  )
		: undefined;
};

export const getTranscendence = (tooltip: TElementUnionArray) => {
	const transcendence = getIndentContent('초월', tooltip);

	if (!transcendence) return undefined;

	const [, htmlText] = transcendence.value.Element_000.topStr.split('[초월]');
	const [grade, total] = removeHtmlTag(htmlText).split('단계');

	return {
		grade,
		total
	};
};

import { removeHtmlTag } from '@sono-repo/util/convert';

import { onlyNumber } from '@/utils';
import {
	getIndentContent,
	getItemPartBox,
	getSingleTextBox
} from '@/utils/elements';

import type { TElementUnionArray } from '@/types/element-json';

export const getElixir = (tooltip: TElementUnionArray) => {
	const elixir = getIndentContent('엘릭서', tooltip);

	return elixir
		? Object.values(elixir.value.Element_000.contentStr).map(({ contentStr }) =>
				removeHtmlTag(contentStr.split('</FONT>')[1]).trimStart()
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

export const getAdvancedReinforce = (tooltip: TElementUnionArray) => {
	const key = '[상급 재련]';
	const advancedReinforce = getSingleTextBox(key, tooltip);

	if (!advancedReinforce) return undefined;

	const [value] = onlyNumber(removeHtmlTag(advancedReinforce.value)) ?? [
		undefined
	];

	return value;
};

const SPLIT_KEY = 'splitKey';

export const getPolishingEffect = (tooltip: TElementUnionArray) => {
	const key = '연마 효과';
	const polishingEffect = getItemPartBox(key, tooltip);

	if (!polishingEffect) return undefined;

	return removeHtmlTag(
		polishingEffect.value.Element_001.replaceAll('<br>', SPLIT_KEY)
	).split(SPLIT_KEY);
};

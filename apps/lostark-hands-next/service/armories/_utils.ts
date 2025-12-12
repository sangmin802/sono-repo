import { removeHtmlTag } from '@sono-repo/util/convert';

import { onlyNumber } from '@/utils';
import { getItemPartBox, getSingleTextBox } from '@/utils/elements';

import type { TElementUnionArray } from '@/types/element-json';

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

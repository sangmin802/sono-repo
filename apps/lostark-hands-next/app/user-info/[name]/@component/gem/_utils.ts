import { removeHtmlTag } from '@sono-repo/util/convert';

import type { IParsedGem } from '@/service/armories/_types';

/**
 * @description 중복된 보석의 갯수만 계산하여 데이터 간소화
 */
export const minifyData = (data: IParsedGem[] | null) => {
	const minifiedObject = data?.reduce<
		Record<string, IParsedGem & { size: number }>
	>((prev, cur) => {
		const name = removeHtmlTag(cur.name);
		const newPrev = { ...prev };
		const target = newPrev[name];

		newPrev[name] = target
			? { ...target, size: target.size + 1 }
			: { ...cur, name: name, size: 1 };

		return newPrev;
	}, {});

	return (
		minifiedObject &&
		Object.values(minifiedObject).sort((a, b) => b.level - a.level)
	);
};

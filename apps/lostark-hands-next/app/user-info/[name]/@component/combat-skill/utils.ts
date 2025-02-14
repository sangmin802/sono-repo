import type { TElement } from '@/type/element-json';

import type { TData } from './types';

/**
 * @description 스킬 중 카운터, 파괴 수치만 계산하여 데이터 간소화
 */
export const minifySkill = (data: TData) =>
	data?.reduce<number[]>(
		(prev, cur) => {
			const newArr = [...prev];
			const target = cur.tooltip.filter(
				({ type }) => type === 'SingleTextBox'
			) as TElement['SingleTextBox'][];

			const skillInfo = target.find(({ value }) => value.includes('<'));

			if (!skillInfo) return newArr;

			const { value } = skillInfo;

			const destoryLevel = /부위 파괴 : 레벨 (\d+)/;
			const match = value.match(destoryLevel);

			const counterLevel = value.includes('카운터 : 가능');

			if (match) newArr[0] += parseInt(match[1]);
			if (counterLevel) newArr[1] += 1;

			return newArr;
		},
		[0, 0]
	);

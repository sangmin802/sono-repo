import type {
	IArmoryCard,
	IArmoryEngraving,
	IArmoryEquipment,
	IArmorySkill,
	ICard,
	IParsedArmoryEquipment,
	IStat,
	ITendency
} from '@/service/armories/types';

import { CDN_URL } from '@/constant';
import {
	ACC_PARTS,
	BASIC_STATS,
	BASIC_TENDENCIES,
	EMO_IMAGE_URL,
	EQUIP_PARTS,
	EXCLUDE_TOOLTIP_TEXT
} from '@/constant/armory';

import type { IObj } from '@/type';
import type { TElementUnionArray } from '@/type/element-json';

/**
 * 프로필 데이터 가공
 */
export const profileTooltipSelector = ({
	stats,
	tendencies
}: {
	stats?: IStat[];
	tendencies?: ITendency[];
}) => ({
	stats: BASIC_STATS.map((name) => ({
		type: name,
		value: `0`,
		tooltip: ['-'],
		...stats
			?.map((stat) => ({
				...stat,
				tooltip: stat.tooltip.filter((val) =>
					EXCLUDE_TOOLTIP_TEXT.every((text) => !val.includes(text))
				)
			}))
			.find(({ type }) => type === name)
	})),
	tendencies: BASIC_TENDENCIES.map((name) => ({
		type: name,
		point: 0,
		maxPoint: 0,
		...tendencies?.find(({ type }) => type === name)
	}))
});

/**
 * 각인 데이터 가공
 */
export const engraveSelector = (args: IArmoryEngraving | null) => {
	if (!args) return args;

	const { effects, engravings } = args;
	const sortedEffects = effects?.sort((a) =>
		engravings?.some(({ name }) => a.name.includes(name)) ? -1 : 0
	);

	const mappedEffects =
		sortedEffects?.map((effect) => {
			const targetEngrave = engravings?.find(({ name }) =>
				effect.name.includes(name)
			)?.tooltip;

			if (!targetEngrave) return effect;

			const json = JSON.parse(targetEngrave);
			const regex = /\b(?:3|6|9|12)\b/g;
			const [point] = json.Element_002.value.match(regex);

			return { ...effect, point: `${point}` };
		}) ?? null;

	return mappedEffects;
};

const changeImageUrl = <T extends IObj>(item: T): T => {
	return Object.entries(item).reduce((prev, [key, val]) => {
		const isObject = typeof val === 'object' && val;

		if (typeof val === 'string') {
			return {
				...prev,
				[key]: Object.keys(EMO_IMAGE_URL).reduce(
					(prev, cur) =>
						EMO_IMAGE_URL[cur]
							? prev.replaceAll(cur, `${CDN_URL}${EMO_IMAGE_URL[cur]}`)
							: prev,
					val
				)
			};
		}

		// object
		if (isObject && !Array.isArray(val))
			return { ...prev, [key]: changeImageUrl(val) };

		return { ...prev, [key]: val };
	}, Object());
};

/**
 * 장비 데이터 가공
 */
export const equipmentSelector = (data: IArmoryEquipment[] | null) =>
	[...EQUIP_PARTS, ...ACC_PARTS].reduce<
		Record<'equip' | 'acc', IParsedArmoryEquipment[]>
	>(
		(prev, cur) => {
			const key = EQUIP_PARTS.includes(cur) ? 'equip' : 'acc';
			const targetItem = data?.find(({ type }) => type === cur);

			if (!targetItem) {
				prev[key].push({
					type: cur,
					name: '',
					icon: '',
					grade: '일반'
				});
			} else {
				const { tooltip: jsonToolip, ...rest } = targetItem;

				prev[key].push({
					...rest,
					tooltip: (
						Object.values(JSON.parse(jsonToolip)) satisfies TElementUnionArray
					).map((item) => {
						if (
							item.type !== 'IndentStringGroup' &&
							item.type !== 'ItemPartBox'
						)
							return item;

						return changeImageUrl(item);
					})
				});
			}

			return prev;
		},
		{ equip: [], acc: [] }
	);

/**
 * 카드 데이터 가공
 */
export const cardSelector = (data: IArmoryCard | null) => {
	const cards = Array.from({ length: 6 }, (_, idx) => idx).reduce<
		(ICard | null)[]
	>((prev, idx) => {
		if (data?.cards[idx]) return [...prev, data.cards[idx]];

		return [...prev, null];
	}, []);

	return { cards, effects: data?.effects ?? null };
};

/**
 * 스킬 데이터 가공
 */
export const skillSelector = (data: IArmorySkill[] | null) => {
	if (!data) return null;
	const selectedSkill = data.filter(
		({ level, isAwakening }) => level >= 4 && !isAwakening
	);

	return selectedSkill.map((skill) => ({
		...skill,
		tooltip: Object.values(
			JSON.parse(skill.tooltip)
		) satisfies TElementUnionArray,
		tripods: skill.tripods.filter(({ isSelected }) => isSelected)
	}));
};

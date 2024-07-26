import type {
	IArkPassive,
	IArmoryAvatar,
	IArmoryCard,
	IArmoryEngraving,
	IArmoryEquipment,
	IArmoryGem,
	IArmorySkill,
	ICard,
	IParsedGem,
	ISelectedArmoryEquipment,
	IStat,
	ITendency,
	TParsedArmory
} from '@/service/armories/types';

import {
	getAdvancedReinforce,
	getElixir,
	getTranscendence
} from '@/util/armory';

import { CDN_URL } from '@/constant';
import {
	ACC_PARTS,
	AVATAR_PARTS,
	BASIC_STATS,
	BASIC_TENDENCIES,
	COLLECT_PARTS,
	EMO_IMAGE_URL,
	EQUIP_PARTS,
	EXCLUDE_TOOLTIP_TEXT
} from '@/constant/armory';

import type { IObj } from '@/type';
import type { TElement, TElementUnionArray } from '@/type/element-json';

/**
 * 프로필 데이터 가공
 */
export const profileTooltipSelector = (
	data: {
		stats: IStat[];
		tendencies: ITendency[];
	} | null
) => ({
	stats: BASIC_STATS.map((name) => ({
		type: name,
		value: `0`,
		tooltip: ['-'],
		...data?.stats
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
		...data?.tendencies?.find(({ type }) => type === name)
	}))
});

export const arkPassiveSelector = (
	args: { arkPassive: IArkPassive } | null
) => ({
	arkPassive: args?.arkPassive ?? {
		isArkPassive: false,
		points: [
			{ name: '진화', value: 0, tooltip: '' },
			{ name: '깨달음', value: 0, tooltip: '' }
		]
	}
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
	[...EQUIP_PARTS, ...ACC_PARTS, ...COLLECT_PARTS].reduce<
		Record<'equip' | 'acc' | 'col', TParsedArmory<ISelectedArmoryEquipment>[]>
	>(
		(prev, cur) => {
			const key = EQUIP_PARTS.includes(cur)
				? 'equip'
				: ACC_PARTS.includes(cur)
				? 'acc'
				: 'col';
			const targetItem = data?.find(({ type }) => type === cur);

			if (!targetItem) {
				prev[key].push({
					type: cur,
					name: '',
					icon: '',
					levelInfo: '',
					quality: 0,
					grade: '일반'
				});
			} else {
				const { tooltip: jsonToolip, ...rest } = targetItem;
				const tooltip = Object.values(
					JSON.parse(jsonToolip)
				) satisfies TElementUnionArray;

				const itemTitle = tooltip.find(({ type }) => type === 'ItemTitle') as
					| TElement['ItemTitle']
					| undefined;

				const levelInfo = itemTitle?.value.leftStr2 ?? '';
				const quality = itemTitle?.value.qualityValue ?? 0;
				const elixir = getElixir(tooltip);
				const transcendence = getTranscendence(tooltip);
				const advancedReinforce = getAdvancedReinforce(tooltip);

				prev[key].push({
					...rest,
					levelInfo,
					quality,
					elixir,
					transcendence,
					advancedReinforce,
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
		{ equip: [], acc: [], col: [] }
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

export const gemSelector = (data: IArmoryGem | null): IParsedGem[] | null => {
	if (!data?.gems) return null;

	return data.gems
		.map((item) => ({
			...item,
			tooltip: Object.values(JSON.parse(item.tooltip)) as TElementUnionArray
		}))
		.sort((a, b) => b.level - a.level);
};

export const avatarSelector = (data: IArmoryAvatar[]) =>
	AVATAR_PARTS.reduce<TParsedArmory<IArmoryAvatar>[][]>((prev, cur) => {
		const targetData = data
			.filter(({ type }) => type === cur)
			.map((item) => ({
				...item,
				isInner: !item.tooltip.includes('덧입기 슬롯에 착용 중'),
				tooltip: Object.values(JSON.parse(item.tooltip)) as TElementUnionArray
			}));

		prev.push(
			targetData.length
				? targetData
				: [
						{
							grade: '일반',
							icon: '',
							isInner: true,
							isSet: false,
							name: '',
							type: cur
						}
				  ]
		);

		return prev;
	}, []);

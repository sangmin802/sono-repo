import type {
	IArmoryEngraving,
	IArmoryEquipment,
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

import type { IObj, ToIndexSignatureRecursive } from '@/type';
import type { TElementUnionArray } from '@/type/element-json';

export const profileTooltipSelector = ({
	stats,
	tendencies
}: ToIndexSignatureRecursive<{
	stats?: IStat[];
	tendencies?: ITendency[];
}>) => ({
	stats: BASIC_STATS.map((name) => ({
		Type: name,
		Value: `0`,
		Tooltip: ['-'],
		...stats
			?.map((stat) => ({
				...stat,
				Tooltip: stat.Tooltip.filter((val) =>
					EXCLUDE_TOOLTIP_TEXT.every((text) => !val.includes(text))
				)
			}))
			.find(({ Type }) => Type === name)
	})),
	tendencies: BASIC_TENDENCIES.map((name) => ({
		Type: name,
		Point: 0,
		MaxPoint: 0,
		...tendencies?.find(({ Type }) => Type === name)
	}))
});

export const engraveSelector = ({
	Effects,
	Engravings
}: ToIndexSignatureRecursive<IArmoryEngraving>) => {
	const sortedEffects = Effects?.sort((a) =>
		Engravings?.some(({ Name }) => a.Name.includes(Name)) ? -1 : 0
	);

	const mappedEffects =
		sortedEffects?.map((effect) => {
			const targetEngrave = Engravings?.find(({ Name }) =>
				effect.Name.includes(Name)
			)?.Tooltip;

			if (!targetEngrave) return effect;

			const json = JSON.parse(targetEngrave);
			const regex = /\b(?:3|6|9|12)\b/g;
			const [Point] = json.Element_002.value.match(regex);

			return { ...effect, Point: `${Point}` };
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

export const equipmentSelector = (data: IArmoryEquipment[] | null) =>
	[...EQUIP_PARTS, ...ACC_PARTS].reduce<
		ToIndexSignatureRecursive<Record<'equip' | 'acc', IParsedArmoryEquipment[]>>
	>(
		(prev, cur) => {
			const key = EQUIP_PARTS.includes(cur) ? 'equip' : 'acc';
			const targetItem = data?.find(({ Type }) => Type === cur);

			if (!targetItem) {
				prev[key].push({
					Type: cur,
					Name: '',
					Icon: '',
					Grade: '일반'
				});
			} else {
				const { Tooltip: jsonToolip, ...rest } = targetItem;

				prev[key].push({
					...rest,
					Tooltip: (
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

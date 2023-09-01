import type {
	IArmoryEngraving,
	IArmoryProfile
} from '@/service/armories/types';

import type { ToIndexSignatureRecursive } from '@/type';

const excludeTooltipText = [
	'카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.',
	'캐릭터의 최대 생명력을 나타냅니다.',
	'적에게 주는 피해를 계산할 때 기준이 되는 값입니다.'
];

export const profileTooltipSelector = (
	profile: ToIndexSignatureRecursive<IArmoryProfile>
) => ({
	...profile,
	Stats: profile.Stats.map((stat) => ({
		...stat,
		Tooltip: stat.Tooltip.filter((val) =>
			excludeTooltipText.every((text) => !val.includes(text))
		)
	}))
});

export const engraveSelector = ({
	Effects,
	Engravings
}: ToIndexSignatureRecursive<IArmoryEngraving>) => {
	const sortedEffects = Effects.sort((a) =>
		Engravings.some(({ Name }) => a.Name.includes(Name)) ? -1 : 0
	);

	const mappedEffects = sortedEffects.map((effect) => {
		const targetEngrave = Engravings.find(({ Name }) =>
			effect.Name.includes(Name)
		)?.Tooltip;

		if (!targetEngrave) return effect;

		const json = JSON.parse(targetEngrave);
		const regex = /\b(?:3|6|9|12)\b/g;
		const [Point] = json.Element_002.value.match(regex);

		return { ...effect, Point };
	});

	return {
		Effects: mappedEffects,
		Engravings
	};
};

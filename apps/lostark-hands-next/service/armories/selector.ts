import type {
	IArmoryEngraving,
	IArmoryEquipment,
	IParsedArmoryEquipment,
	IStat,
	ITendency
} from '@/service/armories/types';

import type { ToIndexSignatureRecursive } from '@/type';

const excludeTooltipText = [
	'카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.',
	'캐릭터의 최대 생명력을 나타냅니다.',
	'적에게 주는 피해를 계산할 때 기준이 되는 값입니다.'
];

const basicStats = [
	'치명',
	'특화',
	'신속',
	'제압',
	'인내',
	'숙련',
	'최대 생명력',
	'공격력'
];
const basicTendencies = ['지성', '담력', '매력', '친절'];

const equipParts = ['무기', '투구', '상의', '하의', '장갑', '어깨'];
const accParts = [
	'목걸이',
	'귀걸이',
	'귀걸이',
	'반지',
	'반지',
	'어빌리티 스톤',
	'팔찌',
	'나침반',
	'부적'
];

export const profileTooltipSelector = ({
	stats,
	tendencies
}: ToIndexSignatureRecursive<{
	stats?: IStat[];
	tendencies?: ITendency[];
}>) => ({
	stats: basicStats.map((name) => ({
		Type: name,
		Value: `0`,
		Tooltip: ['-'],
		...stats
			?.map((stat) => ({
				...stat,
				Tooltip: stat.Tooltip.filter((val) =>
					excludeTooltipText.every((text) => !val.includes(text))
				)
			}))
			.find(({ Type }) => Type === name)
	})),
	tendencies: basicTendencies.map((name) => ({
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

export const equipmentSelector = (data: IArmoryEquipment[] | null) =>
	[...equipParts, ...accParts].reduce<
		ToIndexSignatureRecursive<Record<'equip' | 'acc', IParsedArmoryEquipment[]>>
	>(
		(prev, cur) => {
			const key = equipParts.includes(cur) ? 'equip' : 'acc';
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
					Tooltip: Object.values(JSON.parse(jsonToolip))
				});
			}

			return prev;
		},
		{ equip: [], acc: [] }
	);

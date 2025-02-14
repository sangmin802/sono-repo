import type { TArkPassiveKey } from '@/service/armories/types';
import { ArkPassiveType } from '@/service/armories/types';

import type { TGrade } from '@/type';

export const EXCLUDE_TOOLTIP_TEXT = [
	'카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.',
	'캐릭터의 최대 생명력을 나타냅니다.',
	'적에게 주는 피해를 계산할 때 기준이 되는 값입니다.'
];

export const BASIC_STATS = [
	'치명',
	'특화',
	'신속',
	'제압',
	'인내',
	'숙련',
	'최대 생명력',
	'공격력'
];
export const BASIC_TENDENCIES = ['지성', '담력', '매력', '친절'];

export const EQUIP_PARTS = ['무기', '투구', '상의', '하의', '장갑', '어깨'];

export const ACC_PARTS = ['목걸이', '귀걸이', '반지', '어빌리티 스톤', '팔찌'];
export const COLLECT_PARTS = ['나침반', '부적'];

export const AVATAR_PARTS = [
	'무기 아바타',
	'머리 아바타',
	'상의 아바타',
	'하의 아바타',
	'얼굴1 아바타',
	'얼굴2 아바타',
	/**
	 * 놀랍게도 이게 이동효과 아바타 타입
	 */
	''
];

export const ARK_PASSIVE: Record<string, ArkPassiveType> = {
	enlightenment: ArkPassiveType.Enlightenment,
	evolution: ArkPassiveType.Evolution,
	leap: ArkPassiveType.Leap
};

export const ARK_PASSIVE_TYPE: Record<ArkPassiveType, TArkPassiveKey> = {
	[ArkPassiveType.Enlightenment]: 'enlightenment',
	[ArkPassiveType.Evolution]: 'evolution',
	[ArkPassiveType.Leap]: 'leap'
};

export const EMO_IMAGE_URL: Record<string, string> = {
	emoticon_Transcendence_Grade:
		'/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png',
	emoticon_tooltip_bracelet_locked:
		'/2018/obt/assets/images/common/game/ico_tooltip_locked.png',
	emoticon_tooltip_bracelet_changeable:
		'/2018/obt/assets/images/common/game/ico_tooltip_changeable.png',
	emoticon_tooltip_ability_stone_symbol:
		'/2018/obt/assets/images/common/game/ico_ability_stone_symbol.png',
	emoticon_sign_greenDot:
		'/2018/obt/assets/images/common/game/ico_tooltip_changeable.png'
};

export const POLISHING_EFFECT_OPTIONS: Record<
	string,
	{ text: string; grade: TGrade }
> = {
	'추가 피해 +0.70%': { text: '추피%', grade: '희귀' },
	'추가 피해 +1.60%': { text: '추피%', grade: '영웅' },
	'추가 피해 +2.60%': { text: '추피%', grade: '전설' },
	'적에게 주는 피해 +0.55%': { text: '적추피%', grade: '희귀' },
	'적에게 주는 피해 +0.84%': { text: '적추피%', grade: '희귀' },
	'적에게 주는 피해 +1.20%': { text: '적추피%', grade: '영웅' },
	'적에게 주는 피해 +2.00%': { text: '적추피%', grade: '전설' },
	'세레나데, 신앙, 조화 게이지 획득량 +1.60%': {
		text: '서폿아덴%',
		grade: '희귀'
	},
	'세레나데, 신앙, 조화 게이지 획득량 +3.60%': {
		text: '서폿아덴%',
		grade: '영웅'
	},
	'세레나데, 신앙, 조화 게이지 획득량 +6.00%': {
		text: '서폿아덴%',
		grade: '전설'
	},
	'낙인력 +2.15%': { text: '낙인력%', grade: '희귀' },
	'낙인력 +3.36%': { text: '낙인력%', grade: '희귀' },
	'낙인력 +4.80%': { text: '낙인력%', grade: '영웅' },
	'낙인력 +8.00%': { text: '낙인력%', grade: '전설' },
	'최대 생명력 +1300': { text: '최생+', grade: '희귀' },
	'최대 생명력 +3250': { text: '최생+', grade: '영웅' },
	'최대 생명력 +6500': { text: '최생+', grade: '전설' },
	'공격력 +80': { text: '공+', grade: '희귀' },
	'공격력 +195': { text: '공+', grade: '영웅' },
	'공격력 +390': { text: '공+', grade: '전설' },
	'공격력 +0.40%': { text: '공%', grade: '희귀' },
	'공격력 +0.66%': { text: '공%', grade: '희귀' },
	'공격력 +0.95%': { text: '공%', grade: '영웅' },
	'공격력 +1.55%': { text: '공%', grade: '전설' },
	'무기 공격력 +195': { text: '무공+', grade: '희귀' },
	'무기 공격력 +480': { text: '무공+', grade: '영웅' },
	'무기 공격력 +960': { text: '무공+', grade: '전설' },
	'무기 공격력 +0.80%': { text: '무공%', grade: '희귀' },
	'무기 공격력 +1.80%': { text: '무공%', grade: '영웅' },
	'무기 공격력 +3.00%': { text: '무공%', grade: '전설' },
	'최대 마나 +6': { text: '최마+', grade: '희귀' },
	'최대 마나 +15': { text: '최마+', grade: '영웅' },
	'최대 마나 +30': { text: '최마+', grade: '전설' },
	'상태이상 공격 지속시간 +0.20%': { text: '상태이상+', grade: '희귀' },
	'상태이상 공격 지속시간 +0.50%': { text: '상태이상+', grade: '영웅' },
	'상태이상 공격 지속시간 +1.00%': { text: '상태이상+', grade: '전설' },
	'전투 중 생명력 회복량 +10': { text: '생명회복+', grade: '희귀' },
	'전투 중 생명력 회복량 +25': { text: '생명회복+', grade: '영웅' },
	'전투 중 생명력 회복량 +50': { text: '생명회복+', grade: '전설' },
	'파티원 회복 효과 +0.95%': { text: '아군회복%', grade: '희귀' },
	'파티원 회복 효과 +2.10%': { text: '아군회복%', grade: '영웅' },
	'파티원 회복 효과 +3.50%': { text: '아군회복%', grade: '전설' },
	'파티원 보호막 효과 +0.95%': { text: '아군실드%', grade: '희귀' },
	'파티원 보호막 효과 +1.47%': { text: '아군실드%', grade: '희귀' },
	'파티원 보호막 효과 +2.10%': { text: '아군실드%', grade: '영웅' },
	'파티원 보호막 효과 +3.50%': { text: '아군실드%', grade: '전설' },
	'치명타 적중률 +0.40%': { text: '치적%', grade: '희귀' },
	'치명타 적중률 +0.66%': { text: '치적%', grade: '희귀' },
	'치명타 적중률 +0.95%': { text: '치적%', grade: '영웅' },
	'치명타 적중률 +1.55%': { text: '치적%', grade: '전설' },
	'치명타 피해 +1.10%': { text: '치피%', grade: '희귀' },
	'치명타 피해 +2.40%': { text: '치피%', grade: '영웅' },
	'치명타 피해 +4.00%': { text: '치피%', grade: '전설' },
	'아군 공격력 강화 효과 +1.35%': { text: '아공강%', grade: '희귀' },
	'아군 공격력 강화 효과 +2.12%': { text: '아공강%', grade: '희귀' },
	'아군 공격력 강화 효과 +3.00%': { text: '아공강%', grade: '영웅' },
	'아군 공격력 강화 효과 +5.00%': { text: '아공강%', grade: '전설' },
	'아군 피해량 강화 효과 +2.00%': { text: '아피강%', grade: '희귀' },
	'아군 피해량 강화 효과 +4.50%': { text: '아피강%', grade: '영웅' },
	'아군 피해량 강화 효과 +7.50%': { text: '아피강%', grade: '전설' }
};

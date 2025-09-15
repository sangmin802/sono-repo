import type { TArkPassiveKey } from './_types';
import { ArkPassiveType } from './_types';

export const ARK_PASSIVE_TYPE: Record<ArkPassiveType, TArkPassiveKey> = {
	[ArkPassiveType.Enlightenment]: 'enlightenment',
	[ArkPassiveType.Evolution]: 'evolution',
	[ArkPassiveType.Leap]: 'leap'
};

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

export const COLLECT_PARTS = ['나침반', '부적'];

export const ACC_PARTS = ['목걸이', '귀걸이', '반지', '어빌리티 스톤', '팔찌'];

export const EQUIP_PARTS = ['무기', '투구', '상의', '하의', '장갑', '어깨'];

export const BASIC_TENDENCIES = ['지성', '담력', '매력', '친절'];

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

export const EXCLUDE_TOOLTIP_TEXT = [
	'카드 도감 누적 효과가 반영된 값으로 전투정보실에서는 별도 수치를 표기하지 않습니다.',
	'캐릭터의 최대 생명력을 나타냅니다.',
	'적에게 주는 피해를 계산할 때 기준이 되는 값입니다.'
];

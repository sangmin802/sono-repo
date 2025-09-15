import type { TGrade } from '@/types';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL;

export const GRADE = {
	NORMAL: '일반',
	ADVANCED: '고급',
	RARE: '희귀',
	EPIC: '영웅',
	LEGENDARY: '전설',
	RELIC: '유물',
	ANCIENT: '고대',
	ESTHER: '에스더'
} as const;

export const GRADE_BG_COLOR: Record<TGrade, string> = {
	일반: 'bg-image-normal',
	고급: 'bg-image-advanced',
	희귀: 'bg-image-rare',
	영웅: 'bg-image-epic',
	전설: 'bg-image-legendary',
	유물: 'bg-image-relic',
	고대: 'bg-image-ancient',
	에스더: 'bg-image-esther'
};

export const GOLD_ICON_URL = 'efui_iconatlas/money/money_4.png';
export const CARD_PACK_ICON_URL = 'efui_iconatlas/use/use_10_236.png';
export const CARD_EXP_ICON_URL = 'efui_iconatlas/use/use_10_222.png';
export const SEA_COIN_ICON_URL = 'efui_iconatlas/use/use_2_8.png';

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

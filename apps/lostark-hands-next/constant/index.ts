import type { TGrade } from '@/type';

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
	일반: 'bg-normal',
	고급: 'bg-advanced',
	희귀: 'bg-rare',
	영웅: 'bg-epic',
	전설: 'bg-legendary',
	유물: 'bg-relic',
	고대: 'bg-ancient',
	에스더: 'bg-esther'
};

export const GOLD_ICON_URL = 'efui_iconatlas/money/money_4.png';
export const CARD_PACK_ICON_URL = 'efui_iconatlas/use/use_10_236.png';
export const CARD_EXP_ICON_URL = 'efui_iconatlas/use/use_10_222.png';
export const SEA_COIN_ICON_URL = 'efui_iconatlas/use/use_2_8.png';

import type { TGrade } from '@/type';

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

export const GRADE_TEXT_COLOR: Record<TGrade, string> = {
	일반: 'text-normal',
	고급: 'text-advanced',
	희귀: 'text-rare',
	영웅: 'text-epic',
	전설: 'text-legendary',
	유물: 'text-relic',
	고대: 'text-ancient',
	에스더: 'text-esther'
};

import type { GRADE } from '@/constant';

export type TGrade = (typeof GRADE)[keyof typeof GRADE];

import type { CLASS } from '@/type/class';

/** 캐릭터 정보 */
export interface ICharacterInfo {
	serverName: string;
	characterName: string;
	characterLevel: number;
	characterClassName: keyof typeof CLASS;
	itemAvgLevel: string;
	itemMaxLevel: string;
}

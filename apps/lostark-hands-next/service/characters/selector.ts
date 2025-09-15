import type { ICharacterInfo } from '@/service/characters/_types';

export const sliblingListSelector = (data: ICharacterInfo[] | null) => {
	if (!data) return undefined;

	return [
		...data
			.reduce<Map<string, ICharacterInfo[]>>((prev, cur) => {
				const server = cur.serverName;

				prev.set(server, [...(prev.get(server) ?? []), cur]);

				return prev;
			}, new Map())
			.entries()
	].map(([server, list]) => ({ server, list }));
};

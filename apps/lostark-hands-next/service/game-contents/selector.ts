import { type ICalendar } from '@/service/game-contents/_types';

export const calendarSelector = (list: ICalendar[] | null) => {
	const map = (list ?? []).reduce<Map<string, ICalendar[]>>((prev, cur) => {
		const title = cur.categoryName;
		const prevTarget = prev.get(title);

		prev.set(title, [...(prevTarget ?? []), cur]);

		return prev;
	}, new Map());

	return {
		procyon: {
			calendarIsland: { title: '모험 섬', list: map.get('모험 섬') ?? [] },
			fieldBoss: { title: '필드보스', list: map.get('필드보스') ?? [] },
			chaosGate: { title: '카오스게이트', list: map.get('카오스게이트') ?? [] }
		},
		daily: {
			island: { title: '섬', list: map.get('섬') ?? [] },
			lowen: { title: '로웬', list: map.get('로웬') ?? [] },
			primalIsland: { title: '태초의 섬', list: map.get('태초의 섬') ?? [] }
		}
	};
};

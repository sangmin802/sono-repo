'use client';

import { type calendarListSelector } from '@/service/game-contents/selector';

import SectionLayout from '@/client-component/section-layout';
import TimerGrid from '@/client-component/timer-grid';

type TInitData = ReturnType<typeof calendarListSelector>;
type TCalendarItem = TInitData[0] & {
	type: string;
};

interface ICalendarProps {
	initData: TInitData;
}

const Calendar = async ({ initData }: ICalendarProps) => {
	const calendarGroupList = Array.from(
		initData.reduce((prev, cur) => {
			prev.set(cur.type, [
				...(prev.get(cur.type) ?? []),
				{
					...cur
				}
			]);

			return prev;
		}, new Map<string, TCalendarItem[]>())
	);

	return (
		<>
			{calendarGroupList.map(([title, contentList]) => (
				<SectionLayout
					key={title}
					title={title}
				>
					<TimerGrid<TCalendarItem>
						timerList={contentList}
						emptyFallback={() => <div>오늘은 컨텐츠가 없어요.</div>}
						// render={Test}
					/>
				</SectionLayout>
			))}
		</>
	);
};

export default Calendar;

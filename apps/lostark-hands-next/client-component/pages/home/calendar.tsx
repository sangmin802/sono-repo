'use client';

import { type ComponentProps } from 'react';

import { type calendarListSelector } from '@/service/game-contents/selector';

import SectionLayout from '@/client-component/section-layout';
import TimerGrid from '@/client-component/timer-grid';

type TInitData = ReturnType<typeof calendarListSelector>;
type TRewardList = TInitData[0]['rewardItems'];

interface ICalendarProps {
	initData: TInitData;
}

const Calendar = async ({ initData }: ICalendarProps) => {
	const calendarGroupList = Array.from(
		initData.reduce(
			(prev, cur) => {
				prev.set(cur.type, [
					...(prev.get(cur.type) ?? []),
					{
						...cur,
						renderProps: cur.type === '모험 섬' ? cur.rewardItems : undefined
					}
				]);

				return prev;
			},
			new Map<
				string,
				(ComponentProps<typeof TimerGrid>['timerList'][0] & {
					type: string;
					renderProps?: TRewardList;
				})[]
			>()
		)
	);

	return (
		<div>
			{calendarGroupList.map(([title, contentList]) => (
				<SectionLayout
					key={title}
					title={title}
				>
					<TimerGrid<{ rewardList: TRewardList }>
						timerList={contentList}
						// render={Test}
					/>
				</SectionLayout>
			))}
		</div>
	);
};

export default Calendar;

'use client';

import { useCallback, useMemo, useState } from 'react';

import { getDateDiff, getTimeUnit } from '@sono-repo/util/date';

import { useModalDispatch } from '@/client-component/modal/provider';
import CalendarCard from '@/client-component/pages/home/calendar-card';
import type { TCalendarItem } from '@/client-component/pages/home/types';
import SectionLayout from '@/client-component/section-layout';

interface ICalendarSectionProps {
	title: string;
	list: TCalendarItem[];
}

const CalendarSection = ({ title, list }: ICalendarSectionProps) => {
	const { onOpenModal } = useModalDispatch();

	const [timerList, setTimerList] = useState(list);

	const handleResetEndtime = useCallback(() => {
		setTimerList((prevList) =>
			prevList.map((item) => ({
				...item,
				time: item.time.filter(
					(startTime) =>
						getDateDiff(new Date(startTime), new Date(), 'minutes').minutes > 0
				)
			}))
		);
	}, []);

	const filteredTimerList = useMemo(
		() =>
			timerList
				.filter(
					({ time: [firstTime] }) =>
						getTimeUnit(new Date(), 'day') ===
						getTimeUnit(new Date(firstTime), 'day')
				)
				.sort(({ time: [aTime] }, { time: [bTime] }) =>
					new Date(bTime).getTime() > new Date(aTime).getTime() ? -1 : 0
				),
		[timerList]
	);

	return (
		<SectionLayout
			className="py-[20px]"
			title={title}
		>
			{filteredTimerList.length ? (
				<div className="grid grid-cols-2 gap-[8px] sm:grid-cols-4 lg:grid-cols-7">
					{filteredTimerList.map((item, idx) => (
						<CalendarCard
							key={`${item.name}-${idx}`}
							item={item}
							onResetTime={handleResetEndtime}
							onOpenModal={onOpenModal}
						/>
					))}
				</div>
			) : (
				<div>
					오늘 등장하는 <b>{title}</b>(이/가) 없어요.
				</div>
			)}
		</SectionLayout>
	);
};

export default CalendarSection;

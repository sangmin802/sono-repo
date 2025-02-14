'use client';

import { useMemo } from 'react';

import { useModal } from '@sono-repo/ui';

import useFilterTimerList from '@/hook/use-filter-timer-list';

import { convertCalendarData } from '@/util/calendar';

import type { ICalenderContetProps } from '@/app/@component/types';
import { LabelLayout } from '@/client-component/label-layout';

import DailyContentCard from './card';

const DailyContentSection = ({ title, list }: ICalenderContetProps) => {
	const { onOpenModal } = useModal();

	const { timerList, onReFilter } = useFilterTimerList(
		useMemo(() => convertCalendarData(list), [list])
	);

	return (
		<LabelLayout
			label={title}
			empty={{
				status: !timerList.length,
				fallback: `오늘 등장하는 ${title}(이/가) 없어요.`
			}}
		>
			<div className="grid grid-cols-2 gap-[8px] md:grid-cols-4 lg:grid-cols-7">
				{timerList.map((item, idx) => (
					<DailyContentCard
						key={`${item.name}-${idx}`}
						item={item}
						onResetTime={onReFilter}
						onOpenModal={onOpenModal}
					/>
				))}
			</div>
		</LabelLayout>
	);
};

export default DailyContentSection;

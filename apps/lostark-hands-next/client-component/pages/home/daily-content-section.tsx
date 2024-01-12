'use client';

import useFilterTimerList from '@/hook/use-filter-timer-list';

import LabelLayout from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import DailyContentCard from '@/client-component/pages/home/daily-content-card';
import type { ICalenderContetProps } from '@/client-component/pages/home/types';

const DailyContentSection = ({ title, list }: ICalenderContetProps) => {
	const { onOpenModal } = useModalDispatch();

	const { timerList, onReFilter } = useFilterTimerList(list);

	return (
		<LabelLayout
			className="w-full py-[20px]"
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

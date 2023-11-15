'use client';

import useTimer from 'sono-repo-react-timer';

import { convertDateFormat } from '@sono-repo/util/date';

import useFilterTimerList from '@/hook/use-filter-timer-list';

import { getValidRewardList } from '@/util/calendar';

import LabelLayout from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import ProcyonCompassCard from '@/client-component/pages/home/procyon-compass-card';
import TimeUnit from '@/client-component/pages/home/time-unit';
import type { ICalenderContetProps } from '@/client-component/pages/home/types';

const ProcyonCompassSection = ({ title, list }: ICalenderContetProps) => {
	const { onOpenModal } = useModalDispatch();
	const { timerList, onReFilter } = useFilterTimerList(list);

	const baseItem = timerList[0];
	const firstTime = baseItem?.time[0];

	const timerProps = useTimer({
		endTime: new Date(firstTime).getTime(),
		resetKey: baseItem,
		onCallback: onReFilter,
		onWindowFocus: onReFilter
	});

	return (
		<LabelLayout
			label={title}
			afterLabel={
				<div className="flex space-x-[12px]">
					{firstTime && <div>{convertDateFormat(firstTime)}</div>}
					<TimeUnit {...timerProps} />
				</div>
			}
			empty={{
				status: !timerList.length,
				fallback: `오늘 등장하는 ${title}(이/가) 없어요.`
			}}
		>
			<div className="hide-scrollbar mb-[-12px] max-h-[126px] space-y-[4px] overflow-y-scroll pb-[12px]">
				{timerList.map((item) => (
					<ProcyonCompassCard
						key={item.name}
						{...item}
						showImg={title === '모험 섬'}
						rewardList={getValidRewardList(item.rewardItems, firstTime)}
						onOpenModal={onOpenModal}
					/>
				))}
			</div>
		</LabelLayout>
	);
};

export default ProcyonCompassSection;

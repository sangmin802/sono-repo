'use client';

import { useMemo } from 'react';
import useTimer from 'sono-repo-react-timer';

import { useModal } from '@sono-repo/ui';
import { convertDateFormat } from '@sono-repo/util/date';

import useFilterTimerList from '@/hooks/use-filter-timer-list';
import useNotification from '@/hooks/use-notification';

import type { ICalenderContetProps } from '@/app/@component/_types';
import ProcyonCompassCard from '@/app/@component/procyon-compass/card';
import TimeUnit from '@/app/@component/time-unit';
import LabelLayout from '@/client-component/label-layout';

import { convertCalendarData, getValidRewardList } from '../_utils';

const ProcyonCompassSection = ({ title, list }: ICalenderContetProps) => {
	const { onOpenModal } = useModal();

	const { timerList, onReFilter } = useFilterTimerList(
		useMemo(() => convertCalendarData(list), [list])
	);

	const baseItem = timerList[0];
	const firstTime = baseItem?.time[0];

	const formattedTime = convertDateFormat(firstTime);

	const timerProps = useTimer({
		endTime: new Date(firstTime).getTime(),
		resetKey: baseItem,
		onCallback: onReFilter,
		onWindowFocus: onReFilter
	});

	useNotification({
		title: `${title}: ${formattedTime}`,
		body: timerList.length
			? timerList.map(({ name }) => name).join(',')
			: undefined
	});

	return (
		<LabelLayout
			label={
				<div className="flex gap-x-[12px]">
					<div>{title}</div>
					<div className="flex gap-x-[6px]">
						{firstTime && <div>{formattedTime}</div>}
						<TimeUnit {...timerProps} />
					</div>
				</div>
			}
			empty={{
				status: !timerList.length,
				fallback: `오늘 등장하는 ${title}(이/가) 없어요.`
			}}
		>
			<div className="hide-scrollbar mb-[-12px] flex max-h-[126px] flex-col gap-y-[4px] overflow-y-scroll pb-[12px]">
				{timerList.map(
					(item) =>
						item.time[0] === firstTime && (
							<ProcyonCompassCard
								key={item.name}
								{...item}
								showImg={title === '모험 섬'}
								rewardList={getValidRewardList(item.rewardItems, firstTime)}
								onOpenModal={onOpenModal}
							/>
						)
				)}
			</div>
		</LabelLayout>
	);
};

export default ProcyonCompassSection;

'use client';

import cn from 'classnames';
import Image from 'next/image';

import { convertDateFormat, getTime } from '@sono-repo/util/date';

import useTimer from '@/hook/use-timer';

import type { TModalItem } from '@/client-component/modal/types';
import type { TCalendarItem } from '@/client-component/pages/home/types';

interface ICalendarCardProps {
	item: TCalendarItem;
	onResetTime: () => void;
	onOpenModal: (item: TModalItem) => void;
}

const CalendarCard = ({
	item,
	onResetTime,
	onOpenModal
}: ICalendarCardProps) => {
	const targetTime = item.time[0];
	const time = useTimer(new Date(item.time[0]).getTime(), onResetTime);

	const handleOpenRewardModal = () => {
		const validRewardList = Array.from(item.rewardItems)
			.flatMap(([, val]) => val)
			.filter(
				({ startTimes }) => !startTimes.size || startTimes.has(targetTime)
			);

		onOpenModal({
			name: 'calendarRewardModal',
			props: {
				title: item.name,
				list: validRewardList
			}
		});
	};
	return (
		<div
			className={cn(
				'min-w-0 cursor-pointer overflow-hidden rounded-[4px]',
				time && time < 1000 * 60 * 10
					? 'border-[2px] border-orange-400'
					: 'border border-white'
			)}
			onClick={handleOpenRewardModal}
		>
			<div className="truncate bg-gray-700 px-[8px] text-center">
				{item.name}
			</div>
			<div className="flex">
				<div className="relative mr-[8px] h-[60px] w-[60px] shrink-0">
					<div
						className={cn(
							'absolute bottom-[4px] right-[4px] rounded-[4px] bg-gray-950/80 px-[4px] text-[12px]'
						)}
					>
						Lv {item.badge}
					</div>
					<Image
						src={item.icon}
						width={120}
						height={120}
						alt={item.name}
					/>
				</div>
				<div className="flex w-full flex-col items-center justify-center">
					<div className="text-orange-400">{convertDateFormat(targetTime)}</div>
					<div>{time ? getTime(time) : '-'}</div>
				</div>
			</div>
			<div className="truncate bg-gray-700 px-[8px] text-center">
				{item.desc}
			</div>
		</div>
	);
};

export default CalendarCard;

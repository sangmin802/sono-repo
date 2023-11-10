'use client';

import cn from 'classnames';
import Image from 'next/image';

import { Chip } from '@sono-repo/ui';
import { convertDateFormat, getTime } from '@sono-repo/util/date';

import useTimer from '@sono-repo/timer';

import { getValidRewardList } from '@/util/calendar';

import type { TModalItem } from '@/client-component/modal/types';
import type { TCalendarItem } from '@/client-component/pages/home/types';

interface IDailyContentCardProps {
	item: TCalendarItem;
	onResetTime: () => void;
	onOpenModal: (item: TModalItem) => void;
}

const DailyContentCard = ({
	item,
	onResetTime,
	onOpenModal
}: IDailyContentCardProps) => {
	const targetTime = item.time[0];
	const time = useTimer({
		endTime: new Date(targetTime).getTime(),
		resetKey: item,
		onCallback: onResetTime
	});

	const handleOpenRewardModal = () => {
		onOpenModal({
			name: 'itemListModal',
			props: {
				title: item.name,
				list: getValidRewardList(item.rewardItems, targetTime)
			}
		});
	};

	return (
		<div
			className={cn(
				'min-w-0 cursor-pointer overflow-hidden rounded-[4px] [&_div]:text-[12px]',
				time && time < 1000 * 60 * 10
					? 'border border-orange-400'
					: 'border border-[#7f7f7f]'
			)}
			onClick={handleOpenRewardModal}
		>
			<div className="truncate bg-gray-700 px-[8px] text-center">
				{item.name}
			</div>
			<div className="flex">
				<div className="relative mr-[8px] h-[60px] w-[60px] shrink-0">
					<Chip
						className="absolute bottom-[1px] right-[1px]"
						type="transparent"
					>
						Lv {item.badge}
					</Chip>
					<Image
						src={item.icon}
						width={120}
						height={120}
						alt={item.name}
					/>
				</div>
				<div className="flex w-full flex-col items-center justify-center">
					<div className="text-white">{convertDateFormat(targetTime)}</div>
					<div
						className={cn(
							time && time < 1000 * 60 * 10 ? 'text-white' : 'text-gray-400'
						)}
					>
						{time ? getTime(time) : '-'}
					</div>
				</div>
			</div>
			<div className="truncate bg-gray-700 px-[8px] text-center">
				{item.desc}
			</div>
		</div>
	);
};

export default DailyContentCard;

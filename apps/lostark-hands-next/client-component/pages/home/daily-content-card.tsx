'use client';

import Image from 'next/image';
import useTimer from 'sono-repo-react-timer';

import { Chip } from '@sono-repo/ui';
import { convertDateFormat } from '@sono-repo/util/date';

import { getValidRewardList } from '@/util/calendar';

import type { TModalItem } from '@/client-component/modal/types';
import TimeUnit from '@/client-component/pages/home/time-unit';
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
	const timerProps = useTimer({
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
			className="min-w-0 cursor-pointer overflow-hidden rounded-[4px] border border-[#7f7f7f] [&_div]:text-[12px]"
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
					<TimeUnit {...timerProps} />
				</div>
			</div>
			<div className="truncate bg-gray-700 px-[8px] text-center">
				{item.desc}
			</div>
		</div>
	);
};

export default DailyContentCard;

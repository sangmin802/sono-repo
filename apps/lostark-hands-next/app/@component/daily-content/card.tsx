'use client';

import NextImage from 'next/image';
import useTimer from 'sono-repo-react-timer';

import type { OpenModal } from '@sono-repo/ui';
import { Chip, Image } from '@sono-repo/ui';
import { convertDateFormat } from '@sono-repo/util/date';

import useNotification from '@/hooks/use-notification';

import type { TCalendarItem } from '@/app/@component/_types';
import TimeUnit from '@/app/@component/time-unit';
import ItemListModal from '@/client-component/modal/item-list-modal';

import { getValidRewardList } from '../_utils';

interface IDailyContentCardProps {
	item: TCalendarItem;
	onResetTime: () => void;
	onOpenModal: OpenModal;
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
		onCallback: onResetTime,
		onWindowFocus: onResetTime
	});

	const formattedTime = convertDateFormat(targetTime);

	const handleOpenRewardModal = () => {
		onOpenModal({
			component: ItemListModal,
			props: {
				title: item.name,
				list: getValidRewardList(item.rewardItems, targetTime)
			}
		});
	};

	useNotification({
		title: `${item.type}: ${formattedTime}`,
		body: item.name
	});

	return (
		<div
			className="min-w-0 cursor-pointer overflow-hidden rounded-[4px] border border-[#7f7f7f] [&_div]:text-[12px]"
			onClick={handleOpenRewardModal}
		>
			<div className="truncate bg-gray-700 px-[8px] text-center">
				{item.name}
			</div>
			<div className="flex">
				<div className="relative mr-[8px] size-[60px] shrink-0">
					<Chip
						className="absolute bottom-px right-px z-10"
						type="transparent"
					>
						Lv {item.badge}
					</Chip>
					<Image
						className="size-[60px]"
						src={item.icon}
						width={120}
						height={120}
						alt={item.name}
						as={NextImage}
					/>
				</div>
				<div className="flex w-full flex-col items-center justify-center">
					<div className="text-white">{formattedTime}</div>
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

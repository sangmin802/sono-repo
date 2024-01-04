'use client';

import cn from 'classnames';
import Image from 'next/image';

import type { IRewardItem } from '@/service/game-contents/types';

import type { TModalItem } from '@/client-component/modal/types';

import {
	CARD_EXP_ICON_URL,
	CARD_PACK_ICON_URL,
	CDN_URL,
	GOLD_ICON_URL,
	SEA_COIN_ICON_URL
} from '@/constant';

interface IProcyonCompassCardProps {
	icon: string;
	name: string;
	desc: string;
	rewardList: IRewardItem[];
	showImg?: boolean;
	onOpenModal: (item: TModalItem) => void;
}

const uniqueReward: Record<string, string> = {
	'전설 ~ 고급 카드 팩 III': CARD_PACK_ICON_URL,
	골드: GOLD_ICON_URL,
	'대양의 주화 상자': SEA_COIN_ICON_URL,
	'영혼의 잎사귀': CARD_EXP_ICON_URL
};

const ProcyonCompassCard = ({
	icon,
	name,
	desc,
	rewardList,
	showImg = false,
	onOpenModal
}: IProcyonCompassCardProps) => {
	const isHasReward = !!rewardList.length;

	const handleOpenRewardModal = () => {
		if (!isHasReward) return;

		onOpenModal({
			name: 'itemListModal',
			props: {
				title: name,
				list: rewardList
			}
		});
	};

	return (
		<div
			className={cn('flex items-center space-x-[8px] [&_div]:text-[12px]', {
				'cursor-pointer': isHasReward
			})}
			onClick={handleOpenRewardModal}
		>
			{showImg && (
				<Image
					className="rounded-[4px]"
					width={30}
					height={30}
					src={icon}
					alt={name}
				/>
			)}
			<div className="flex space-x-[16px]">
				<div>{name}</div>
				{name.replaceAll(' ', '') !== desc.replaceAll(' ', '') && (
					<div className="text-gray-400">{desc}</div>
				)}
				<div className="flex shrink-0 space-x-[4px]">
					{rewardList.map(
						({ name }) =>
							uniqueReward[name] && (
								<Image
									key={name}
									className="h-[16px] w-[16px] rounded-[4px]"
									width={16}
									height={16}
									src={`${CDN_URL}/${uniqueReward[name]}`}
									alt={name}
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProcyonCompassCard;

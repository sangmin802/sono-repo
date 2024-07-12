'use client';

import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { IRewardItem } from '@/service/game-contents/types';

import type { TModalItem } from '@/client-component/modal/types';
import RewardIcon from '@/client-component/reward-icon';

import {
	CARD_EXP_ICON_URL,
	CARD_PACK_ICON_URL,
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
					className="size-[30px] overflow-hidden rounded-[4px]"
					width={30}
					height={30}
					src={icon}
					alt={name}
					as={NextImage}
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
								<RewardIcon
									key={name}
									name={name}
									path={uniqueReward[name]}
								/>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProcyonCompassCard;

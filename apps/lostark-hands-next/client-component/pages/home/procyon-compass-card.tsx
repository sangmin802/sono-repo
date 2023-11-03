'use client';

import cn from 'classnames';
import Image from 'next/image';

import { Chip } from '@sono-repo/ui';

import type { IRewardItem } from '@/service/game-contents/types';

import type { TModalItem } from '@/client-component/modal/types';

interface IProcyonCompassCardProps {
	icon: string;
	name: string;
	desc: string;
	rewardList: IRewardItem[];
	showImg?: boolean;
	onOpenModal: (item: TModalItem) => void;
}

const uniqueReward: Record<string, string> = {
	'전설 ~ 고급 카드 팩 III': '카드 팩',
	골드: '골드',
	'대양의 주화 상자': '주화 상자',
	'영혼의 잎사귀': '카드 경험치'
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
				<div className="flex space-x-[4px]">
					{rewardList.map(
						({ name }) =>
							uniqueReward[name] && (
								<Chip
									className={cn({ '!bg-yellow-600': name === '골드' })}
									key={name}
									type="info"
								>
									{uniqueReward[name]}
								</Chip>
							)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProcyonCompassCard;

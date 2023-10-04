'use client';

import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';
import ArmoryTooltip from '@/client-component/pages/user-info/armory-tooltip';
import ItemThumbnail from '@/client-component/pages/user-info/item-thumbnail';
import ItemTitle from '@/client-component/pages/user-info/item-title';

const ArmoryTooltipModal = ({
	name,
	subTitle,
	afterSubTitle,
	icon,
	chip,
	grade,
	tooltip
}: IModalItemProps['armoryTooltipModal']) => {
	const contents = Object.values(tooltip ?? {});

	return (
		<ModalLayout footerProps={{ cancel: { show: false } }}>
			<div className="mb-[18px] flex space-x-[8px]">
				<ItemThumbnail
					className="h-[60px] w-[60px]"
					src={icon}
					alt={name}
					grade={grade}
					chip={chip}
				/>
				<ItemTitle
					subTitle={subTitle}
					afterSubTitle={afterSubTitle}
					title={name}
					grade={grade}
				/>
			</div>
			<div className="space-y-[16px]">
				{contents.map((item, idx) => (
					<ArmoryTooltip
						key={idx}
						item={item}
					/>
				))}
			</div>
		</ModalLayout>
	);
};

export default ArmoryTooltipModal;

'use client';

import cn from 'classnames';

import ItemThumbnail from '@/client-component/item-thumbnail';
import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';
import ArmoryTooltip from '@/client-component/pages/user-info/armory-tooltip';

import { GRADE_TEXT_COLOR } from '@/constant';

const ArmoryTooltipListModal = ({
	list
}: IModalItemProps['armoryTooltipListModal']) => {
	return (
		<ModalLayout footerProps={{ cancel: { show: false } }}>
			<div className="space-y-[12px]">
				{list.map(({ icon, name, grade, tooltip }, idx) => (
					<div
						className="flex flex-col justify-center"
						key={idx}
					>
						<div
							className={cn(
								'mb-[4px] text-[12px] font-medium',
								GRADE_TEXT_COLOR[grade ?? '일반']
							)}
						>
							{name}
						</div>
						<div className="flex space-x-[8px]">
							<ItemThumbnail
								className="h-[40px] w-[40px]"
								src={icon}
								alt={name}
								grade={grade}
							/>
							<div>
								{tooltip.map((item, idx) => (
									<ArmoryTooltip
										key={idx}
										item={item}
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</ModalLayout>
	);
};

export default ArmoryTooltipListModal;

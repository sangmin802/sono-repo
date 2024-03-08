'use client';

import ArmoryTooltip from '@/client-component/armory-tooltip';
import GradeText from '@/client-component/grade-text';
import ModalLayout from '@/client-component/modal/layout';
import type { IModalItemProps } from '@/client-component/modal/types';
import Thumbnail from '@/client-component/thumbnail';

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
						<GradeText
							className="mb-[4px] text-[12px] font-medium"
							grade={grade ?? '일반'}
						>
							{name}
						</GradeText>
						<div className="flex space-x-[8px]">
							<Thumbnail
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

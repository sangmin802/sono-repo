import { useModal } from '@sono-repo/ui';

import GradeText from '@/client-component/grade-text';
import ArmoryTooltipModal from '@/client-component/modal/armory-tooltip-modal';
import Thumbnail from '@/client-component/thumbnail';

import type { TData } from './_types';

const SkillCard = (item: Exclude<TData, null>[0]) => {
	const { onOpenModal } = useModal();

	const handleOpenSkillModal = () => {
		onOpenModal({
			component: ArmoryTooltipModal,
			props: {
				...item,
				grade: '일반',
				chip: item.level,
				subTitle: item.type
			}
		});
	};

	return (
		<div
			className="flex cursor-pointer flex-col gap-y-[4px]"
			key={item.name}
			onClick={handleOpenSkillModal}
		>
			<div className="flex items-center gap-x-[4px]">
				<div>{item.name}</div>
				{item.rune && (
					<GradeText grade={item.rune.grade}>{item.rune.name}</GradeText>
				)}
			</div>
			<div className="flex items-center gap-x-[12px]">
				<Thumbnail
					className="h-[50px] w-[50px]"
					src={item.icon}
					alt={item.name}
					chip={item.level}
				/>
				<div className="min-w-0 grow">
					{item.tripods.map(({ name }, idx) => (
						<div
							key={idx}
							className="truncate text-[12px] leading-[16px]"
						>
							{name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillCard;

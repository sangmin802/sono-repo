'use client';

import { useModal } from '@sono-repo/ui';
import { removeHtmlTag } from '@sono-repo/util/convert';

import type { IParsedGem } from '@/service/armories/types';

import LabelLayout from '@/client-component/label-layout';
import ArmoryTooltipListModal from '@/client-component/modal/armory-tooltip-list-modal';
import Thumbnail from '@/client-component/thumbnail';

import { minifyData } from './utils';

interface IGemProps {
	data: IParsedGem[] | null;
}

const Gem = ({ data }: IGemProps) => {
	const { onOpenModal } = useModal();

	const handleClickGem = () => {
		if (!data) return;

		onOpenModal({
			component: ArmoryTooltipListModal,
			props: {
				list: data.map((item) => ({
					...item,
					name: removeHtmlTag(item.name),
					tooltip: item.tooltip.filter(({ type }) => type === 'ItemPartBox')
				}))
			}
		});
	};

	const minifiedData = minifyData(data);

	return (
		<LabelLayout
			label="보석"
			as="section"
			empty={{ status: !minifiedData, fallback: '장착중인 보석이 없습니다.' }}
		>
			<div
				className="mb-[-8px] flex cursor-pointer flex-wrap"
				onClick={handleClickGem}
			>
				{minifiedData?.map(({ icon, name, grade, level, size }, idx) => (
					<div
						className="flex w-[100px] items-center space-x-[8px] pb-[8px]"
						key={idx}
					>
						<Thumbnail
							className="h-[40px] w-[40px]"
							src={icon}
							alt={name}
							grade={grade}
						/>
						<div>
							<div>{level}레벨</div>
							<div className="text-[12px] text-gray-400">({size}개)</div>
						</div>
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default Gem;

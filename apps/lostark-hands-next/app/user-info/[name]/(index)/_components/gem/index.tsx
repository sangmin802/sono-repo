'use client';

import type { IParsedGem } from '@/service/armories/_types';

import LabelLayout from '@/client-component/label-layout';
import Thumbnail from '@/client-component/thumbnail';

import { minifyData } from './_utils';
import ModalSectionContainer from './modal-section-container';

interface IGemProps {
	data: IParsedGem[] | null;
}

const Gem = ({ data }: IGemProps) => {
	const minifiedData = minifyData(data);

	return (
		<LabelLayout
			label="보석"
			as="section"
			empty={{ status: !minifiedData, fallback: '장착중인 보석이 없습니다.' }}
		>
			<ModalSectionContainer data={data}>
				{minifiedData?.map(({ icon, name, grade, level, size }, idx) => (
					<div
						className="flex w-[100px] items-center gap-x-[8px] pb-[8px]"
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
			</ModalSectionContainer>
		</LabelLayout>
	);
};

export default Gem;

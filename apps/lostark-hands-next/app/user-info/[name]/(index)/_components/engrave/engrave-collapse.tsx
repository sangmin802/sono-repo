'use client';

import NextImage from 'next/image';

import { Collapse, Image } from '@sono-repo/ui';

import type { IArkPassiveEffects } from '@/service/armories/_types';

import LabelLayout from '@/client-component/label-layout';

import { CDN_URL } from '@/constants';

import ItemDescModalCardContainer from '../../../_components/item-desc-modal-card-container';
import ENGRAVE_IMGAE from './_constants';
import ArkPassiveEngrave from './ark-passive-engrave';

interface IEngravesProps {
	data: {
		arkPassiveEffects: IArkPassiveEffects[] | null;
	};
}

const createModalData = (effects: IArkPassiveEffects[] | null) => {
	if (!effects) return [];

	return effects.map(({ name, description }) => ({
		title: name,
		desc: description
	}));
};

const EngraveCollapse = ({ data }: IEngravesProps) => {
	return (
		<Collapse
			id="engraves"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex gap-x-[4px]">
						{data.arkPassiveEffects?.map(({ name }) => (
							<Image
								as={NextImage}
								key={name}
								className="size-[24px] overflow-hidden rounded-[4px]"
								src={`${CDN_URL}/EFUI_IconAtlas/${
									ENGRAVE_IMGAE[name.split(' Lv')[0]]
								}`}
								width={24}
								height={24}
								alt={name}
							/>
						))}
					</Collapse.Summary>
				}
				as="aside"
				empty={{ status: !data, fallback: '설정된 각인이 없습니다.' }}
			>
				<Collapse.Content>
					<ItemDescModalCardContainer
						className="flex flex-col gap-y-[6px] pt-0"
						title="각인"
						data={createModalData(data.arkPassiveEffects)}
					>
						<ArkPassiveEngrave data={data.arkPassiveEffects} />
					</ItemDescModalCardContainer>
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export default EngraveCollapse;

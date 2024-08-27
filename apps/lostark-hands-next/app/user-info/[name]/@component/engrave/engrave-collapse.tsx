'use client';

import NextImage from 'next/image';

import { Collapse, Image } from '@sono-repo/ui';

import type { IArkPassiveEffects, IEffect } from '@/service/armories/types';

import { LabelLayout } from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';

import { CDN_URL } from '@/constant';
import ENGRAVE_IMGAE from '@/constant/engrave';

import ArkPassiveEngrave from './ark-passive-engrave';
import CommonEngrave from './common-engrave';

interface IEngravesProps {
	data: {
		mappedEffects: IEffect[] | null;
		arkPassiveEffects: IArkPassiveEffects[] | null;
	};
}

const EngraveCollapse = ({ data }: IEngravesProps) => {
	const isArkPassive = data?.arkPassiveEffects;
	const engraveData = isArkPassive
		? data.arkPassiveEffects
		: data.mappedEffects;

	const { onOpenModal } = useModalDispatch();

	const handleOpenModal = () => {
		if (!engraveData) return;

		onOpenModal({
			name: 'descListModal',
			props: {
				title: '각인',
				list: engraveData?.map(({ name, description }) => ({
					title: name,
					desc: description
				}))
			}
		});
	};
	return (
		<Collapse id="engraves">
			<LabelLayout
				label={
					<Collapse.Summary className="flex space-x-[4px]">
						{engraveData?.map(({ name }) => (
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
				<Collapse.Content
					className="space-y-[6px] pt-0"
					onClick={handleOpenModal}
				>
					{isArkPassive ? (
						<ArkPassiveEngrave data={data.arkPassiveEffects} />
					) : (
						<CommonEngrave data={data.mappedEffects} />
					)}
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export default EngraveCollapse;
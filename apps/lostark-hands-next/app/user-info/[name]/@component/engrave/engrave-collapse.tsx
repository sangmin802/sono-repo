'use client';

import NextImage from 'next/image';

import { Collapse, Image, useModal } from '@sono-repo/ui';

import type { IArkPassiveEffects, IEffect } from '@/service/armories/_types';

import LabelLayout from '@/client-component/label-layout';
import DescListModal from '@/client-component/modal/desc-list-modal';

import { CDN_URL } from '@/constants';

import ENGRAVE_IMGAE from './_constants';
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

	const { onOpenModal } = useModal();

	const handleOpenModal = () => {
		if (!engraveData) return;

		onOpenModal({
			component: DescListModal,
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
		<Collapse
			id="engraves"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex gap-x-[4px]">
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
					className="flex flex-col gap-y-[6px] pt-0"
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

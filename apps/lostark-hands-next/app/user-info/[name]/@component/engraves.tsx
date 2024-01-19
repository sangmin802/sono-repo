'use client';

import Image from 'next/image';

import type { IEffect } from '@/service/armories/types';

import { LabelLayout } from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';

import { CDN_URL } from '@/constant';
import ENGRAVE_IMGAE from '@/constant/engrave';

import type { ToCamelKey } from '@/type';

interface IEngravesProps {
	data?: ToCamelKey<IEffect[]>;
}

const engravePointColor: Record<number, string> = {
	0: 'text-white',
	3: 'text-advanced',
	6: 'text-rare',
	9: 'text-epic',
	12: 'text-legendary'
};

const Engraves = ({ data }: IEngravesProps) => {
	const { onOpenModal } = useModalDispatch();

	const handleOpenModal = () => {
		if (!data) return;

		onOpenModal({
			name: 'descListModal',
			props: {
				title: '각인',
				list: data?.map(({ name, description }) => ({
					title: name,
					desc: description
				}))
			}
		});
	};
	return (
		<LabelLayout
			label="각인"
			as="aside"
			empty={{ status: !data, fallback: '장착된 각인이 없습니다.' }}
			onClick={handleOpenModal}
		>
			<div className="space-y-[6px]">
				{data?.map(({ name, point }) => (
					<div
						key={name}
						className="flex items-center"
					>
						<div className="relative">
							<Image
								className="rounded-[6px]"
								src={`${CDN_URL}/EFUI_IconAtlas/${
									ENGRAVE_IMGAE[name.split(' Lv')[0]]
								}`}
								width={36}
								height={36}
								alt="name"
							/>
						</div>
						<div className="ml-[8px]">
							{!!point && (
								<div className="text-[12px] leading-[12px] text-gray-400">
									+{point} 각인서
								</div>
							)}
							<div className={engravePointColor[Number(point) ?? 0]}>
								{name}
							</div>
						</div>
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export default Engraves;

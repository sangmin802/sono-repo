'use client';

import Image from 'next/image';

import { Collapse } from '@sono-repo/ui';

import type { IEffect } from '@/service/armories/types';

import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import Skeleton from '@/client-component/skeleton';

import { CDN_URL } from '@/constant';
import ENGRAVE_IMGAE from '@/constant/engrave';

interface IEngravesProps {
	data?: IEffect[] | null;
}

const engravePointColor: Record<number, string> = {
	0: 'text-white',
	3: 'text-advanced',
	6: 'text-rare',
	9: 'text-epic',
	12: 'text-legendary'
};

export const Engraves = ({ data }: IEngravesProps) => {
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
		<Collapse id="engraves">
			<LabelLayout
				label={
					<Collapse.Summary className="flex space-x-[4px]">
						{data?.map(({ name }) => (
							<Image
								key={name}
								className="rounded-[4px]"
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
				empty={{ status: !data, fallback: '장착된 각인이 없습니다.' }}
			>
				<Collapse.Content
					className="space-y-[6px] pt-0"
					onClick={handleOpenModal}
				>
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
									alt={name}
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
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export const EngravesSkeleton = () => (
	<LabelLayoutSkeleton as="aside">
		<div className="space-y-[6px]">
			{Array.from({ length: Math.random() * 5 + 1 }).map((_, idx) => (
				<div
					key={idx}
					className="flex items-center"
				>
					<Skeleton
						className="h-[36px] w-[36px]"
						type="LIGHT"
					/>
					<Skeleton
						className="ml-[8px] h-[21px]"
						type="LIGHT"
						randomWidth={{ max: 110, min: 66 }}
					/>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

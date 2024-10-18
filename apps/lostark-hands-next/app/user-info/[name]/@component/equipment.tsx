'use client';

import { Chip, useModal } from '@sono-repo/ui';
import { removeHtmlTag } from '@sono-repo/util/convert';

import type {
	ISelectedArmoryEquipment,
	TParsedArmory
} from '@/service/armories/types';

import { onlyNumber } from '@/util/selector';

import QualityChip from '@/app/user-info/[name]/@component/quality-chip';
import GradeText from '@/client-component/grade-text';
import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import ArmoryTooltipModal from '@/client-component/modal/armory-tooltip-modal';
import {
	ThumbnailCard,
	ThumbnailCardSkeleton
} from '@/client-component/thumbnail-card';

import { CDN_URL } from '@/constant';
import { EMO_IMAGE_URL, POLISHING_EFFECT_OPTIONS } from '@/constant/armory';

interface IEquipmentProps {
	data: Record<'equip' | 'acc', TParsedArmory<ISelectedArmoryEquipment>[]>;
}

const Transcendence = ({
	data
}: {
	data: ISelectedArmoryEquipment['transcendence'];
}) => {
	if (!data) return;

	return (
		<ThumbnailCard
			className="h-[18px] w-[18px]"
			src={`${CDN_URL}/${EMO_IMAGE_URL.emoticon_Transcendence_Grade}`}
			alt="transcendence"
		>
			<div className="flex">
				<div className="text-[12px]">x{data.grade}</div>
				<div className="text-[12px] font-bold">+{data.total}</div>
			</div>
		</ThumbnailCard>
	);
};

const Elixir = ({ data }: { data: ISelectedArmoryEquipment['elixir'] }) => {
	if (!data) return;

	return (
		<div className="flex shrink-0 space-x-[4px]">
			{data.map((value) => (
				<Chip
					key={value}
					type="info"
				>
					{value}
				</Chip>
			))}
		</div>
	);
};

export const Equipment = ({ data: { equip, acc } }: IEquipmentProps) => {
	const { onOpenModal } = useModal();

	const handleOpenModal = (item: TParsedArmory<ISelectedArmoryEquipment>) => {
		if (!item.name) return;

		onOpenModal({
			component: ArmoryTooltipModal,
			props: {
				...item,
				subTitle: removeHtmlTag(item.levelInfo),
				afterSubTitle: <QualityChip size={item.quality} />
			}
		});
	};

	const accGrid = [
		[0, 5],
		[5, acc.length]
	];

	return (
		<>
			<LabelLayout
				label="장비"
				as="section"
			>
				<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
					{equip.map((item) => (
						<ThumbnailCard
							className="h-[40px] w-[40px]"
							grade={item.grade}
							key={item.type}
							src={item.icon}
							alt={item.name}
							onClick={() => handleOpenModal(item)}
						>
							{item.name && (
								<>
									<div className="flex space-x-[8px]">
										<GradeText
											className="text-[12px]"
											grade={item.grade}
										>
											+{onlyNumber(item.name)}
										</GradeText>
										<GradeText
											className="text-[12px]"
											grade={item.grade}
										>
											{onlyNumber(removeHtmlTag(item.levelInfo))?.[0]}
											{` [+${item.advancedReinforce ?? 0}]`}
										</GradeText>
										<QualityChip size={item.quality} />
									</div>
									<div className="flex items-center space-x-[6px]">
										<Elixir data={item.elixir} />
										<Transcendence data={item.transcendence} />
									</div>
								</>
							)}
						</ThumbnailCard>
					))}
				</div>
			</LabelLayout>
			<LabelLayout
				label="장신구"
				as="section"
			>
				<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
					{accGrid.map((num, idx) => (
						<div
							key={idx}
							className="flex flex-col space-y-[8px]"
						>
							{acc.slice(...num).map((item, idx) => (
								<ThumbnailCard
									className="h-[40px] w-[40px]"
									key={`${item.type}-${idx}`}
									grade={item.grade}
									src={item.icon}
									alt={item.name}
									onClick={() => handleOpenModal(item)}
								>
									{item.name && (
										<>
											<div className="flex space-x-[8px]">
												<QualityChip size={item.quality} />
												<GradeText
													className="text-[12px]"
													grade={item.grade}
												>
													{item.type}
												</GradeText>
											</div>
											<div className="flex space-x-[8px]">
												{item.polishingEffect &&
													item.polishingEffect.map((value) => (
														<GradeText
															className="text-[12px]"
															key={value}
															grade={POLISHING_EFFECT_OPTIONS[value].grade}
														>
															{POLISHING_EFFECT_OPTIONS[value].text}
														</GradeText>
													))}
											</div>
										</>
									)}
								</ThumbnailCard>
							))}
						</div>
					))}
				</div>
			</LabelLayout>
		</>
	);
};

export const EquipmentSkeleton = () => (
	<>
		<LabelLayoutSkeleton
			className="!mt-0"
			as="section"
		>
			<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
				{Array.from({ length: 6 }).map((_, idx) => (
					<div
						className="flex space-x-[6px]"
						key={idx}
					>
						<ThumbnailCardSkeleton className="h-[40px] w-[40px]" />
					</div>
				))}
			</div>
		</LabelLayoutSkeleton>
		<LabelLayoutSkeleton as="section">
			<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
				<div className="flex flex-col space-y-[8px]">
					{Array.from({ length: 5 }).map((_, idx) => (
						<ThumbnailCardSkeleton
							className="h-[40px] w-[40px]"
							key={idx}
						/>
					))}
				</div>
				<div className="flex flex-col space-y-[8px]">
					{Array.from({ length: 2 }).map((_, idx) => (
						<ThumbnailCardSkeleton
							className="h-[40px] w-[40px]"
							key={idx}
						/>
					))}
				</div>
			</div>
		</LabelLayoutSkeleton>
	</>
);

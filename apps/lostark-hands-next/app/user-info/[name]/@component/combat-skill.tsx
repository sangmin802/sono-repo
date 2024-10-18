'use client';

import cn from 'classnames';

import { Chip, Collapse, useModal } from '@sono-repo/ui';

import type { skillSelector } from '@/service/armories/selector';

import GradeText from '@/client-component/grade-text';
import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import ArmoryTooltipModal from '@/client-component/modal/armory-tooltip-modal';
import Skeleton from '@/client-component/skeleton';
import Thumbnail from '@/client-component/thumbnail';

import type { TElement } from '@/type/element-json';

type TData = ReturnType<typeof skillSelector>;

interface ICombatSkillProps {
	data: TData;
}

/**
 * @description 스킬 중 카운터, 파괴 수치만 계산하여 데이터 간소화
 */
const minifySkill = (data: TData) =>
	data?.reduce<number[]>(
		(prev, cur) => {
			const newArr = [...prev];
			const target = cur.tooltip.filter(
				({ type }) => type === 'SingleTextBox'
			) as TElement['SingleTextBox'][];

			const skillInfo = target.find(({ value }) => value.includes('<'));

			if (!skillInfo) return newArr;

			const { value } = skillInfo;

			const destoryLevel = /부위 파괴 : 레벨 (\d+)/;
			const match = value.match(destoryLevel);

			const counterLevel = value.includes('카운터 : 가능');

			if (match) newArr[0] += parseInt(match[1]);
			if (counterLevel) newArr[1] += 1;

			return newArr;
		},
		[0, 0]
	);

export const CombatSkill = ({ data }: ICombatSkillProps) => {
	const { onOpenModal } = useModal();

	const handleOpenSkillModal = (item: Exclude<TData, null>[0]) => () => {
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

	const [destory, counter] = minifySkill(data) ?? [0, 0];

	return (
		<Collapse
			id="combat-skill"
			isInitOpen
		>
			<LabelLayout
				label={
					<Collapse.Summary className="flex space-x-[16px]">
						<div>스킬</div>
						{data && (
							<div className="flex space-x-[8px]">
								<Chip type="info">부위파괴 {destory}</Chip>
								<Chip type="info">카운터 {counter}</Chip>
							</div>
						)}
					</Collapse.Summary>
				}
				as="section"
				empty={{ status: !data, fallback: '선택된 스킬이 없습니다.' }}
			>
				<Collapse.Content className="grid grid-cols-2 gap-[12px] pt-0 md:grid-cols-4">
					{data?.map((item) => (
						<div
							className="flex cursor-pointer flex-col space-y-[4px]"
							key={item.name}
							onClick={handleOpenSkillModal(item)}
						>
							<div className="flex items-center space-x-[4px]">
								<div>{item.name}</div>
								{item.rune && (
									<GradeText grade={item.rune.grade}>
										{item.rune.name}
									</GradeText>
								)}
							</div>
							<div className="flex items-center space-x-[12px]">
								<Thumbnail
									className="h-[50px] w-[50px]"
									src={item.icon}
									alt={item.name}
									chip={item.level}
								/>
								<div className="min-w-0 grow">
									{item.tripods.map(({ name, level }, idx) => (
										<div
											className="flex space-x-[8px]"
											key={idx}
										>
											<div
												className={cn(
													'text-[12px] font-bold leading-[16px] text-orange-500'
												)}
											>
												{level}
											</div>
											<div className="truncate text-[12px] leading-[16px]">
												{name}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</Collapse.Content>
			</LabelLayout>
		</Collapse>
	);
};

export const CombatSkillSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="grid grid-cols-2 gap-[12px] md:grid-cols-4">
			{Array.from({ length: 8 }).map((_, idx) => (
				<div
					className="flex cursor-pointer flex-col space-y-[4px]"
					key={idx}
				>
					<div className="flex items-center space-x-[4px]">
						<Skeleton
							className="h-[21px]"
							randomWidth={{ max: 64, min: 48 }}
							type="LIGHT"
						/>
						<Skeleton
							className="h-[21px] w-[21px]"
							type="LIGHT"
						/>
					</div>
					<div className="flex items-center space-x-[12px]">
						<Skeleton
							className="h-[50px] w-[50px]"
							type="LIGHT"
						/>
						<div className="flex h-full min-w-0 grow flex-col items-start space-y-[1px]">
							{Array.from({ length: Math.round(Math.random() * 2 + 1) }).map(
								(_, idx) => (
									<Skeleton
										className="h-[16px] w-[60px]"
										key={idx}
										type="LIGHT"
									/>
								)
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

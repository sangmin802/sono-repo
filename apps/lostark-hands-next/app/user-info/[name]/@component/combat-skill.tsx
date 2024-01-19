'use client';

import cn from 'classnames';

import { Chip } from '@sono-repo/ui';

import type { skillSelector } from '@/service/armories/selector';

import ItemThumbnail from '@/client-component/item-thumbnail';
import { LabelLayout } from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';

import { GRADE_TEXT_COLOR } from '@/constant';

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

			target.forEach(({ value }) => {
				const destoryLevel = /부위 파괴 : 레벨 (\d+)/;
				const match = value.match(destoryLevel);

				const counterLevel = value.includes('카운터 : 가능');

				if (match) newArr[0] += parseInt(match[1]);
				if (counterLevel) newArr[1] += 1;
			});

			return newArr;
		},
		[0, 0]
	);

const CombatSkill = ({ data }: ICombatSkillProps) => {
	const { onOpenModal } = useModalDispatch();

	const handleOpenSkillModal = (item: Exclude<TData, null>[0]) => () => {
		onOpenModal({
			name: 'armoryTooltipModal',
			props: {
				...item,
				chip: item.level,
				subTitle: item.type
			}
		});
	};

	const [destory, counter] = minifySkill(data) ?? [0, 0];

	return (
		<LabelLayout
			label="스킬"
			as="section"
			empty={{ status: !data, fallback: '선택된 스킬이 없습니다.' }}
			afterLabel={
				data && (
					<div className="flex space-x-[8px]">
						<Chip type="info">부위파괴 {destory}</Chip>
						<Chip type="info">카운터 {counter}</Chip>
					</div>
				)
			}
		>
			<div className="grid grid-cols-2 gap-[12px] md:grid-cols-4">
				{data?.map((item) => (
					<div
						className="flex cursor-pointer flex-col space-y-[4px]"
						key={item.name}
						onClick={handleOpenSkillModal(item)}
					>
						<div className="flex items-center space-x-[4px]">
							<div>{item.name}</div>
							{item.rune && (
								<div className={cn(GRADE_TEXT_COLOR[item.rune.grade])}>
									{item.rune.name}
								</div>
							)}
						</div>
						<div className="flex items-center space-x-[12px]">
							<ItemThumbnail
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
			</div>
		</LabelLayout>
	);
};

export default CombatSkill;

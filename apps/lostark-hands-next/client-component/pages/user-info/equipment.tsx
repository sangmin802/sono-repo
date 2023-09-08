'use client';

import cn from 'classnames';

import { removeHtmlTag } from '@sono-repo/util/convert';

import type { IParsedArmoryEquipment } from '@/service/armories/types';

import Label from '@/client-component/label';
import { useModalDispatch } from '@/client-component/modal/provider';
import type { TModalItem } from '@/client-component/modal/types';
import ArmoryCard from '@/client-component/pages/user-info/armory-card';

import { GRADE_TEXT_COLOR } from '@/constant';

import type { ToCamelKey } from '@/type';
import type { TElementUnion } from '@/type/element-json';

type TItem = ToCamelKey<IParsedArmoryEquipment>;

interface IEquipmentProps {
	data: Record<'equip' | 'acc', TItem[]>;
}

/**
 * EquipmentCard
 * @description 장비카드
 * use in {@link Equipment}
 */
const Card = ({
	onOpenModal,
	...item
}: TItem & { onOpenModal: (item: TModalItem) => void }) => {
	const { type, grade, icon, name, tooltip } = item;

	const itemTitle = tooltip?.find(({ type }) => type === 'ItemTitle') as
		| TElementUnion['ItemTitle']
		| undefined;

	const handleOpenModal = () => {
		if (!itemTitle) return;

		onOpenModal({ name: 'equipmentModal', props: { item, itemTitle } });
	};

	return (
		<ArmoryCard
			grade={grade}
			image={icon}
			armoryType={type}
			onClick={handleOpenModal}
		>
			{itemTitle && (
				<>
					<div className="flex items-center space-x-[4px]">
						<div className="text-[12px] font-bold">
							{removeHtmlTag(itemTitle.value.leftStr2)}
						</div>
						{itemTitle.value.qualityValue >= 0 && (
							<div className="w-fit rounded-[4px] bg-main-40 px-[4px] text-[12px]">
								품질 {itemTitle.value.qualityValue}
							</div>
						)}
					</div>
					<div className={cn(GRADE_TEXT_COLOR[grade], 'truncate')}>{name}</div>
				</>
			)}
		</ArmoryCard>
	);
};

const Equipment = ({ data: { equip, acc } }: IEquipmentProps) => {
	const { onOpenModal } = useModalDispatch();

	return (
		<div className="space-y-[16px]">
			<div className="rounded-[6px] bg-main-20 p-[8px]">
				<Label className="mb-[12px] w-fit">장비</Label>
				<div className="grid grid-cols-1 gap-[8px] md:grid-cols-2">
					{equip.map((item) => (
						<Card
							key={item.type}
							onOpenModal={onOpenModal}
							{...item}
						/>
					))}
				</div>
			</div>
			<div className="rounded-[6px] bg-main-20 p-[8px]">
				<Label className="mb-[12px] w-fit">장신구</Label>
				<div className="grid grid-cols-1 gap-[8px] md:grid-cols-2">
					<div className="flex flex-col space-y-[8px]">
						{acc.slice(0, 5).map((item, idx) => (
							<Card
								key={`${item.type}-${idx}`}
								onOpenModal={onOpenModal}
								{...item}
							/>
						))}
					</div>
					<div className="flex flex-col space-y-[8px]">
						{acc.slice(5, acc.length).map((item, idx) => (
							<Card
								key={`${item.type}-${idx}`}
								onOpenModal={onOpenModal}
								{...item}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Equipment;

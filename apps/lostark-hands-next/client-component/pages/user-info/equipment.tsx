'use client';

import type { IParsedArmoryEquipment } from '@/service/armories/types';

import { getIndentContent } from '@/util/armory';

import Label from '@/client-component/label';
import { useModalDispatch } from '@/client-component/modal/provider';
import type { TModalItem } from '@/client-component/modal/types';
import Elixir from '@/client-component/pages/user-info/elixir';
import ItemThumbnail from '@/client-component/pages/user-info/item-thumbnail';
import ItemTitle from '@/client-component/pages/user-info/item-title';
import QualityChip from '@/client-component/pages/user-info/quality-chip';
import Transcendence from '@/client-component/pages/user-info/transcendence';

import type { ToCamelKey } from '@/type';
import type { TElement } from '@/type/element-json';

type TItem = ToCamelKey<IParsedArmoryEquipment>;

interface IEquipmentProps {
	data: Record<'equip' | 'acc', TItem[]>;
}

/**
 * EquipmentCard
 * @description 장비카드
 * used in {@link Equipment}
 */
const Card = ({
	onOpenModal,
	...item
}: TItem & { onOpenModal: (item: TModalItem) => void }) => {
	const { type, grade, icon, name, tooltip } = item;

	const itemTitle = tooltip?.find(({ type }) => type === 'ItemTitle') as
		| TElement['ItemTitle']
		| undefined;

	const elixir = getIndentContent('엘릭서 효과', tooltip);
	const transcendence = getIndentContent('초월', tooltip);

	const handleOpenModal = () => {
		if (!itemTitle) return;

		onOpenModal({ name: 'equipmentModal', props: { item, itemTitle } });
	};

	return (
		<div
			className="flex cursor-pointer space-x-[6px]"
			onClick={handleOpenModal}
		>
			<ItemThumbnail
				className="h-[60px] w-[60px]"
				grade={grade}
				src={icon}
				alt={name}
				chip={type}
			/>
			<div className="flex flex-col justify-center">
				{itemTitle && (
					<>
						<ItemTitle
							subTitle={itemTitle.value.leftStr2}
							afterSubTitle={
								<QualityChip size={itemTitle.value.qualityValue} />
							}
							title={name}
							grade={grade}
						/>
						<div className="flex space-x-[8px]">
							{elixir && <Elixir {...elixir} />}
							{transcendence && <Transcendence {...transcendence} />}
						</div>
					</>
				)}
				{!itemTitle && `착용중인 ${type} 이/가 없습니다.`}
			</div>
		</div>
	);
};

const Equipment = ({ data: { equip, acc } }: IEquipmentProps) => {
	const { onOpenModal } = useModalDispatch();

	return (
		<div className="space-y-[16px]">
			<div className="rounded-[6px] bg-main-20 p-[8px]">
				<Label className="mb-[12px] w-fit">장비</Label>
				<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
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
				<div className="grid grid-cols-1 gap-[8px] lg:grid-cols-2">
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

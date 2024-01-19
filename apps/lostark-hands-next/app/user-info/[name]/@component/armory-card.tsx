'use client';

import cn from 'classnames';

import { getIndentContent } from '@/util/armory';

import Elixir from '@/app/user-info/[name]/@component/elixir';
import ItemDesc from '@/app/user-info/[name]/@component/item-desc';
import QualityChip from '@/app/user-info/[name]/@component/quality-chip';
import Transcendence from '@/app/user-info/[name]/@component/transcendence';
import ItemThumbnail from '@/client-component/item-thumbnail';
import type { TModalItem } from '@/client-component/modal/types';
import Skeleton from '@/client-component/skeleton';

import type { TGrade } from '@/type';
import type { TElement, TElementUnionArray } from '@/type/element-json';

interface IArmoryCardProps {
	type: string;
	name: string;
	icon: string;
	grade: TGrade;
	showChip?: boolean;
	tooltip?: TElementUnionArray;
	onOpenModal?: (item: TModalItem) => void;
}

export const ArmoryCard = ({
	onOpenModal,
	showChip = true,
	...item
}: IArmoryCardProps) => {
	const { type, grade, icon, name, tooltip } = item;

	const itemTitle = tooltip?.find(({ type }) => type === 'ItemTitle') as
		| TElement['ItemTitle']
		| undefined;

	const elixir = getIndentContent('엘릭서 효과', tooltip);
	const transcendence = getIndentContent('초월', tooltip);

	const handleOpenModal = () => {
		if (!itemTitle) return;

		onOpenModal?.({
			name: 'armoryTooltipModal',
			props: {
				...item,
				subTitle: itemTitle.value.leftStr2,
				afterSubTitle: <QualityChip size={itemTitle.value.qualityValue} />
			}
		});
	};

	return (
		<div
			className={cn('flex space-x-[6px]', { 'cursor-pointer': !!onOpenModal })}
			onClick={handleOpenModal}
		>
			<ItemThumbnail
				className="h-[60px] w-[60px]"
				grade={grade}
				src={icon}
				alt={name}
				chip={showChip ? type : undefined}
			/>
			<div className="flex min-w-0 grow flex-col justify-center">
				{itemTitle && (
					<>
						<ItemDesc
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

export const ArmoryCardSkeleton = () => (
	<div className="flex space-x-[6px]">
		<Skeleton
			className="h-[60px] w-[60px]"
			type="LIGHT"
		/>
		<div className="flex min-w-0 grow flex-col justify-center space-y-[1px]">
			<Skeleton
				className="h-[18px]"
				randomWidth={{ max: 220, min: 100 }}
				type="LIGHT"
			/>
			<Skeleton
				className="h-[21px]"
				randomWidth={{ max: 220, min: 100 }}
				type="LIGHT"
			/>
			<Skeleton
				className="h-[18px]"
				randomWidth={{ max: 220, min: 100 }}
				type="LIGHT"
			/>
		</div>
	</div>
);

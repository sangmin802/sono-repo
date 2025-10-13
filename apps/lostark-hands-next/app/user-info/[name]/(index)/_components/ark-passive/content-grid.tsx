'use client';
import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { TArkPassiveKey } from '@/service/armories/_types';
import type { ISelectedArkPassive } from '@/service/armories/_types';

import DangerousHTML from '@/client-component/dangerous-html';

import type { TElementUnionArray } from '@/types/element-json';

import ItemDescModalCardContainer from '../../../_components/item-desc-modal-card-container';
import { ARK_PASSIVE, ARK_PASSIVE_COLOR_CONFIG } from './_constants';

interface ContentGridProps {
	title: string;
	group: ISelectedArkPassive['effects'][TArkPassiveKey];
}

const createItemDesc = (tooltip: TElementUnionArray) =>
	String(tooltip.find((item) => item.type === 'MultiTextBox')?.value).replace(
		'||',
		''
	);

const ContentGrid = ({ title, group }: ContentGridProps) => {
	return (
		<div>
			<div
				className={cn(
					'font-semibold',
					ARK_PASSIVE_COLOR_CONFIG[ARK_PASSIVE[title]]
				)}
			>
				{ARK_PASSIVE[title]}
			</div>
			<div className="my-[12px] flex flex-col gap-y-[8px]">
				{group.map((item, idx) => (
					<ItemDescModalCardContainer
						key={`${item.name}-${idx}`}
						className="flex cursor-pointer items-center gap-x-[8px]"
						data={[
							{
								title: item.description,
								desc: createItemDesc(item.toolTip),
								icon: item.icon
							}
						]}
					>
						<Image
							className="size-[30px] overflow-hidden rounded-[6px]"
							as={NextImage}
							src={item.icon}
							width={30}
							height={30}
							alt={item.name}
						/>
						<DangerousHTML html={item.description.replace(item.name, '')} />
					</ItemDescModalCardContainer>
				))}
			</div>
		</div>
	);
};

export default ContentGrid;

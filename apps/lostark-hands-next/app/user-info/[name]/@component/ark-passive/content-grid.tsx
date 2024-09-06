'use client';
import cn from 'classnames';
import NextImage from 'next/image';

import { Image } from '@sono-repo/ui';

import type { TArkPassiveKey } from '@/service/armories/types';
import type { ISelectedArkPassive } from '@/service/armories/types';

import DangerousHTML from '@/client-component/dangerous-html';
import { useModalDispatch } from '@/client-component/modal/provider';

import { ARK_PASSIVE } from '@/constant/armory';

import type { TElementUnionArray } from '@/type/element-json';

import { ARK_PASSIVE_COLOR_CONFIG } from './constants';

interface ContentGridProps {
	title: string;
	group: ISelectedArkPassive['effects'][TArkPassiveKey];
}

const ContentGrid = ({ title, group }: ContentGridProps) => {
	const { onOpenModal } = useModalDispatch();

	const handleClickArkPassive = (
		title: string,
		icon: string,
		tooltip: TElementUnionArray
	) => {
		const desc = String(
			tooltip.find((item) => item.type === 'MultiTextBox')?.value
		).replace('||', '');

		onOpenModal({
			name: 'descListModal',
			props: {
				list: [{ title, icon, desc }]
			}
		});
	};

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
			<div className="my-[12px] space-y-[8px]">
				{group.map((item, idx) => (
					<div
						key={`${item.name}-${idx}`}
						className="flex cursor-pointer items-center space-x-[8px]"
						onClick={() =>
							handleClickArkPassive(item.description, item.icon, item.toolTip)
						}
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
					</div>
				))}
			</div>
		</div>
	);
};

export default ContentGrid;

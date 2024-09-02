'use client';

import { removeHtmlTag } from '@sono-repo/util/convert';

import type { IParsedGem } from '@/service/armories/types';

import {
	LabelLayout,
	LabelLayoutSkeleton
} from '@/client-component/label-layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import Skeleton from '@/client-component/skeleton';
import Thumbnail from '@/client-component/thumbnail';

console.log('HELLO');

interface IGemProps {
	data: IParsedGem[] | null;
}

/**
 * @description 중복된 보석의 갯수만 계산하여 데이터 간소화
 */
const minifyData = (data: IGemProps['data']) => {
	const minifiedObject = data?.reduce<
		Record<string, IParsedGem & { size: number }>
	>((prev, cur) => {
		const name = removeHtmlTag(cur.name);
		const newPrev = { ...prev };
		const target = newPrev[name];

		newPrev[name] = target
			? { ...target, size: target.size + 1 }
			: { ...cur, name: name, size: 1 };

		return newPrev;
	}, {});

	return (
		minifiedObject &&
		Object.values(minifiedObject).sort((a, b) => b.level - a.level)
	);
};

export const Gem = ({ data }: IGemProps) => {
	const { onOpenModal } = useModalDispatch();

	const handleClickGem = () => {
		if (!data) return;

		onOpenModal({
			name: 'armoryTooltipListModal',
			props: {
				list: data.map((item) => ({
					...item,
					name: removeHtmlTag(item.name),
					tooltip: item.tooltip.filter(({ type }) => type === 'ItemPartBox')
				}))
			}
		});
	};

	const minifiedData = minifyData(data);

	return (
		<LabelLayout
			label="보석"
			as="section"
			empty={{ status: !minifiedData, fallback: '장착중인 보석이 없습니다.' }}
		>
			<div
				className="mb-[-8px] flex cursor-pointer flex-wrap"
				onClick={handleClickGem}
			>
				{minifiedData?.map(({ icon, name, grade, level, size }, idx) => (
					<div
						className="flex w-[100px] items-center space-x-[8px] pb-[8px]"
						key={idx}
					>
						<Thumbnail
							className="h-[40px] w-[40px]"
							src={icon}
							alt={name}
							grade={grade}
						/>
						<div>
							<div>{level}레벨</div>
							<div className="text-[12px] text-gray-400">({size}개)</div>
						</div>
					</div>
				))}
			</div>
		</LabelLayout>
	);
};

export const GemSkeleton = () => (
	<LabelLayoutSkeleton as="section">
		<div className="flex flex-wrap space-x-[16px]">
			{Array.from({ length: Math.random() * 2 + 1 }).map((_, idx) => (
				<div
					className="flex items-center space-x-[8px]"
					key={idx}
				>
					<Skeleton
						className="h-[40px] w-[40px]"
						type="LIGHT"
					/>
					<div>
						<Skeleton
							className="h-[21px] w-[38px]"
							type="LIGHT"
						/>
						<Skeleton
							className="mt-[1px] h-[18px] w-[38px]"
							type="LIGHT"
						/>
					</div>
				</div>
			))}
		</div>
	</LabelLayoutSkeleton>
);

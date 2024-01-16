'use client';

import type { ITendency } from '@/service/armories/types';

import Label from '@/client-component/label';

import type { ToCamelKey } from '@/type';

interface ITendenciesProps {
	data: ToCamelKey<ITendency>[];
}

const Tendencies = ({ data }: ITendenciesProps) => {
	return (
		<div className="grid grid-cols-2 gap-[6px] rounded-[6px] bg-main-20 p-[8px]">
			{data.map(({ type, point }) => (
				<div
					className="flex items-center space-x-[4px]"
					key={type}
				>
					<Label>{type}</Label>
					<div>{point}</div>
				</div>
			))}
		</div>
	);
};

export default Tendencies;

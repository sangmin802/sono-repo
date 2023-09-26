'use client';

import Image from 'next/image';

import DangerousHTML from '@/client-component/dangerous-html';

import type { TElement } from '@/type/element-json';

const TripodSkillCustom = ({ value }: TElement['TripodSkillCustom']) => {
	const arr = Object.values(value ?? {});

	return (
		<div className="space-y-[12px]">
			{arr.map(({ name, tier, desc, slotData: { iconPath } }, idx) => (
				<div
					className="flex space-x-[8px]"
					key={idx}
				>
					<Image
						className="h-[40px] w-[40px] shrink-0"
						width={40}
						height={40}
						alt={name}
						src={iconPath}
					/>
					<div className="[&_*]:text-[12px]">
						<div className="flex space-x-[4px]">
							<DangerousHTML html={tier} />
							<DangerousHTML html={name} />
						</div>
						<DangerousHTML html={desc} />
					</div>
				</div>
			))}
		</div>
	);
};

export default TripodSkillCustom;

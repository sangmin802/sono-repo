'use client';

import DangerousHTML from '@/client-component/dangerous-html';
import IndentStringGroup from '@/client-component/pages/user-info/indent-string-group';
import ItemPartBox from '@/client-component/pages/user-info/item-part-box';
import TripodSkillCustom from '@/client-component/pages/user-info/tripod-skill-custom';

import type { TElement } from '@/type/element-json';

interface IArmoryTooltipProps {
	item: TElement[keyof TElement];
}

const ArmoryTooltip = ({ item }: IArmoryTooltipProps) => {
	switch (item.type) {
		case 'ItemPartBox':
			return <ItemPartBox {...item} />;
		case 'IndentStringGroup':
			return <IndentStringGroup {...item} />;
		case 'TripodSkillCustom':
			return <TripodSkillCustom {...item} />;
		case 'SingleTextBox':
			return (
				<DangerousHTML
					className="text-[12px] [&_*]:text-[12px]"
					html={item.value}
				/>
			);
		default:
			return null;
	}
};

export default ArmoryTooltip;

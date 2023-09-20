import DangerousHTML from '@/client-component/dangerous-html';

import type { ToCamelKey } from '@/type';
import type { TElement } from '@/type/element-json';

const ItemPartBox = ({ value }: ToCamelKey<TElement['ItemPartBox']>) => {
	const arr = Object.values(value);

	return (
		<div>
			{arr.map((item, idx) => (
				<DangerousHTML
					className="text-[12px] [&_*]:text-[12px]"
					key={idx}
					html={item}
				/>
			))}
		</div>
	);
};

export default ItemPartBox;

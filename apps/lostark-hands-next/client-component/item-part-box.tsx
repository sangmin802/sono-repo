import DangerousHTML from '@/client-component/dangerous-html';

import type { TElement } from '@/types/element-json';

const ItemPartBox = ({ value }: TElement['ItemPartBox']) => {
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

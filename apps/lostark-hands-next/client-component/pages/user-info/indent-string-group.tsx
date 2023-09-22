import DangerousHTML from '@/client-component/dangerous-html';

import type { TElement } from '@/type/element-json';

const IndentStringGroup = ({ value }: TElement['IndentStringGroup']) => {
	const arr = Object.values(value ?? {});

	return (
		<div className="space-y-[16px]">
			{arr.map(({ contentStr, topStr }) => (
				<div
					className="text-[12px] [&_*]:text-[12px]"
					key={topStr}
				>
					<DangerousHTML html={topStr} />
					<div>
						{Object.values(contentStr ?? {}).map(({ contentStr }, idx) => (
							<DangerousHTML
								key={idx}
								html={contentStr}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default IndentStringGroup;

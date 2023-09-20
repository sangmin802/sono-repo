import { Chip } from '@sono-repo/ui';
import { removeHtmlTag } from '@sono-repo/util/convert';

import type { ToCamelKey } from '@/type';
import type { TElement } from '@/type/element-json';

const Elixir = ({ value }: ToCamelKey<TElement['IndentStringGroup']>) => {
	const list = Object.values(value.element_000.contentStr).map(
		({ contentStr }) => removeHtmlTag(contentStr.split('</FONT>')[1])
	);

	return (
		<div className="flex shrink-0 space-x-[4px]">
			{list.map((elixir) => (
				<Chip
					key={elixir}
					type="info"
				>
					{elixir}
				</Chip>
			))}
		</div>
	);
};

export default Elixir;

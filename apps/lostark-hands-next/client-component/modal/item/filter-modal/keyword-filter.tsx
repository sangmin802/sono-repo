'use client';

import cn from 'classnames';

import { Accordion } from '@sono-repo/ui';

import type { TOnChangeFilter } from '@/client-component/modal/item/filter-modal/types';

const KeywordFilter = ({
	dataIndex,
	name,
	keyword,
	data,
	onChange
}: {
	dataIndex: string;
	name: string;
	keyword?: string | number;
	data: { key: string | number; name: string | number }[];
	onChange: TOnChangeFilter;
}) => {
	const handleClickFilter = (value: string | number) => {
		onChange('KEYWORD', { [dataIndex]: value });
	};

	return (
		<>
			<Accordion.Summary>{name}</Accordion.Summary>
			<Accordion.Content className="flex flex-wrap">
				{data.map(({ key, name }) => (
					<div
						key={`${name}-${key}`}
						className={cn('mr-[12px] cursor-pointer', {
							'font-bold': key === keyword,
							'text-main-40': key !== keyword
						})}
						onClick={() => handleClickFilter(key)}
					>
						{name}
					</div>
				))}
			</Accordion.Content>
		</>
	);
};

export default KeywordFilter;

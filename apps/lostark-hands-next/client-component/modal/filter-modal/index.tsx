'use client';

import { useState } from 'react';

import type { ModalProps } from '@sono-repo/ui';
import { Accordion, Button, Collapse, ModalLayout } from '@sono-repo/ui';

import type { ICode } from '@/type';

import CategoryFilter from './category-filter';
import KeywordFilter from './keyword-filter';
import SearchFilter from './search-filter';
import type { TFilter, TOnChangeFilter } from './types';

interface FilterModalProps extends ModalProps<Partial<TFilter>> {
	title: string;
	resetFilter?: Partial<TFilter>;
	initFilter: Partial<TFilter>;
	list: (
		| {
				type: 'CATEGORY';
				key: string;
				name: string;
				data: (ICode & {
					subs: ICode[];
				})[];
		  }
		| {
				type: 'KEYWORD';
				key: string;
				name: string;
				data: { key: string | number; name: string | number }[];
		  }
		| {
				type: 'SEARCH';
				key: string;
				name: string;
				placeholder?: string;
		  }
	)[];
}

const FilterModal = ({
	title,
	resetFilter,
	initFilter,
	list,
	onResolve
}: FilterModalProps) => {
	const [filter, setFilter] = useState(initFilter);

	const handleReset = () => {
		setFilter({ category: {}, keyword: {}, search: {}, ...resetFilter });
	};

	const handleChangeFilter = (
		...[key, filter]: Parameters<TOnChangeFilter>
	) => {
		setFilter((prev) => {
			switch (key) {
				case 'CATEGORY':
					return { ...prev, category: { ...prev.category, ...filter } };
				case 'KEYWORD':
					return { ...prev, keyword: { ...prev.keyword, ...filter } };
				case 'SEARCH':
					return { ...prev, search: { ...prev.search, ...filter } };
				default:
					return prev;
			}
		});
	};

	return (
		<ModalLayout
			title={title}
			containerClassName="space-y-[8px]"
			confirm={{ show: true, onClick: () => onResolve(filter) }}
		>
			<Button onClick={handleReset}>초기화</Button>
			<Accordion>
				{list.map(({ key, ...item }) => {
					const defaultProps = {
						dataIndex: key,
						onChange: handleChangeFilter
					};

					return (
						<Collapse
							key={key}
							id={key}
						>
							{item.type === 'CATEGORY' && (
								<CategoryFilter
									category={filter.category?.[key]}
									{...defaultProps}
									{...item}
								/>
							)}
							{item.type === 'KEYWORD' && (
								<KeywordFilter
									key={key}
									keyword={filter.keyword?.[key]}
									{...defaultProps}
									{...item}
								/>
							)}
							{item.type === 'SEARCH' && (
								<SearchFilter
									key={key}
									value={filter.search?.[key]}
									{...defaultProps}
									{...item}
								/>
							)}
						</Collapse>
					);
				})}
			</Accordion>
		</ModalLayout>
	);
};

export default FilterModal;

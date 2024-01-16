'use client';

import { useState } from 'react';

import { Button } from '@sono-repo/ui';

import CategoryFilter from '@/client-component/modal/item/filter-modal/category-filter';
import KeywordFilter from '@/client-component/modal/item/filter-modal/keyword-filter';
import SearchFilter from '@/client-component/modal/item/filter-modal/search-filter';
import type { TOnChangeFilter } from '@/client-component/modal/item/filter-modal/types';
import ModalLayout from '@/client-component/modal/layout';
import { useModalDispatch } from '@/client-component/modal/provider';
import type { IModalItemProps } from '@/client-component/modal/types';

const FilterModal = ({
	title,
	resetFilter,
	initFilter,
	list,
	onConfirm
}: IModalItemProps['filterModal']) => {
	const { onCloseModal } = useModalDispatch();

	const [filter, setFilter] = useState(initFilter);

	const handleConfirm = () => {
		onConfirm(filter);

		onCloseModal();
	};

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
			footerProps={{ confirm: { onClick: handleConfirm } }}
		>
			<Button onClick={handleReset}>초기화</Button>
			{list.map(({ key, ...item }) => {
				const defaultProps = {
					dataIndex: key,
					onChange: handleChangeFilter
				};

				if (item.type === 'CATEGORY')
					return (
						<CategoryFilter
							key={key}
							category={filter.category?.[key]}
							{...defaultProps}
							{...item}
						/>
					);

				if (item.type === 'KEYWORD')
					return (
						<KeywordFilter
							key={key}
							keyword={filter.keyword?.[key]}
							{...defaultProps}
							{...item}
						/>
					);

				if (item.type === 'SEARCH')
					return (
						<SearchFilter
							key={key}
							value={filter.search?.[key]}
							{...defaultProps}
							{...item}
						/>
					);
			})}
		</ModalLayout>
	);
};

export default FilterModal;
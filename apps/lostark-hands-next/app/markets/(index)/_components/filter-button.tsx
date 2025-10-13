import { useState } from 'react';
import cn from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button, Modal } from '@sono-repo/ui';

import type { IOptions } from '@/service/markets/_types';

import useMarketsFilter from '../use-markets-filter';
import FilterModal from './filter-modal';
import type { TFilter } from './filter-modal/types';

interface FilterButtonProps {
	data: IOptions;
}

const FILTER_KEY_LIST = [
	'mainCategory',
	'subCategory',
	'characterClass',
	'itemGrade',
	'itemName',
	'sort',
	'sortCondition'
];
const RESET_FILTER = {
	category: {
		categoryCode: {
			main: 20000
		}
	}
};
const SEARCH_FILTER = {
	type: 'SEARCH' as const,
	name: '검색',
	key: 'itemName',
	placeholder: '아이템명을 검색해 주세요.'
};
const CATEGORY_FILTER = {
	type: 'CATEGORY' as const,
	name: '카테고리',
	key: 'categoryCode'
};
const CHARACTER_CLASS_FILTER = {
	type: 'KEYWORD' as const,
	name: '직업',
	key: 'characterClass'
};
const ITEM_GRADE_FILTER = {
	type: 'KEYWORD' as const,
	name: '등급',
	key: 'itemGrade'
};
const SORT_FILTER = {
	type: 'KEYWORD' as const,
	name: '정렬',
	key: 'sort',
	data: [
		{
			key: 'GRADE',
			name: '등급'
		},
		{
			key: 'YDAY_AVG_PRICE',
			name: '전일 평균 거래가'
		},
		{
			key: 'RECENT_PRICE',
			name: '최근 거래가'
		},
		{
			key: 'CURRENT_MIN_PRICE',
			name: '최저가'
		}
	]
};
const SORT_CONDITION_FILTER = {
	type: 'KEYWORD' as const,
	name: '정렬 조건',
	key: 'sortCondition',
	data: [
		{ key: 'ASC', name: '오름차순' },
		{ key: 'DESC', name: '내림차순' }
	]
};

const FilterButton = ({ data }: FilterButtonProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const pathname = usePathname();
	const router = useRouter();
	const query = useSearchParams();

	const {
		mainCategory,
		subCategory,
		characterClass,
		itemGrade,
		itemName,
		sort,
		sortCondition
	} = useMarketsFilter();

	const initFilter = {
		category: {
			categoryCode: {
				main: mainCategory,
				...(subCategory && { sub: subCategory })
			}
		},
		keyword: {
			...(characterClass && { characterClass }),
			...(itemGrade && { itemGrade }),
			...(sort && { sort }),
			...(sortCondition && { sortCondition })
		},
		search: { ...(itemName && { itemName }) }
	};

	const handleClickConfirm = ({
		category,
		keyword,
		search
	}: Partial<TFilter>) => {
		const current = new URLSearchParams(Array.from(query.entries()));

		const newMainCategory = category?.categoryCode.main;
		const newSubCategory = category?.categoryCode.sub;

		FILTER_KEY_LIST.forEach((key) => current.delete(key));

		if (newMainCategory) current.set('mainCategory', `${newMainCategory}`);
		if (newSubCategory) current.set('subCategory', `${newSubCategory}`);

		Object.entries({ ...keyword, ...search }).forEach(([key, value]) => {
			if (value) current.set(key, `${value}`);
		});

		const searchQuery = current.toString();

		router.replace(`${pathname}${searchQuery ? `?${searchQuery}` : ''}`);
	};

	const handleClickCancel = () => {
		setIsOpen(false);
	};

	return (
		<Button
			className={cn(
				'fixed bottom-[4%] right-[6%] flex items-center justify-center rounded-[4px] px-[6px] py-[4px]',
				'bg-gray-800/[.6] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]'
			)}
			onClick={() => setIsOpen(true)}
		>
			+필터
			<Modal
				isOpen={isOpen}
				onClickOutside={handleClickCancel}
			>
				<FilterModal
					title="거래소 필터"
					resetFilter={RESET_FILTER}
					initFilter={initFilter}
					list={[
						SEARCH_FILTER,
						{ ...CATEGORY_FILTER, data: data.categories },
						{
							...CHARACTER_CLASS_FILTER,
							data: data.classes.map((value) => ({
								key: value,
								name: value
							}))
						},
						{
							...ITEM_GRADE_FILTER,
							data: data.itemGrades.map((value) => ({
								key: value,
								name: value
							}))
						},
						SORT_FILTER,
						SORT_CONDITION_FILTER
					]}
					onConfirm={handleClickConfirm}
				/>
			</Modal>
		</Button>
	);
};

export default FilterButton;

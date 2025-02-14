import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useModal } from '@sono-repo/ui';

import type { IOptions } from '@/service/markets/types';

import FilterModal from '@/client-component/modal/filter-modal';

const filterKeyArr = [
	'mainCategory',
	'subCategory',
	'characterClass',
	'itemGrade',
	'itemName',
	'sort',
	'sortCondition'
];

const useMarketsFilter = (options: IOptions) => {
	/**
	 * @see {@link https://nextjs.org/blog/next-14-1#other-improvements}
	 * 14.1부터 useSearchParams hook이 Suspense로 감싸져 있지 않으면 build가 실패하도록 변경됨
	 */
	const query = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const { onOpenModal } = useModal();

	const mainCategory = Number(query.get('mainCategory')) || 20000;
	const subCategory = Number(query.get('subCategory')) || undefined;
	const characterClass = query.get('characterClass') ?? undefined;
	const itemGrade = query.get('itemGrade') ?? undefined;
	const itemName = query.get('itemName') ?? undefined;
	const sort = query.get('sort') ?? undefined;
	const sortCondition = query.get('sortCondition') ?? undefined;

	const onOpenFilter = async () => {
		const modalResult = await onOpenModal({
			component: FilterModal,
			props: {
				title: '거래소 필터',
				resetFilter: {
					category: {
						categoryCode: {
							main: 20000
						}
					}
				},
				initFilter: {
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
				},
				list: [
					{
						type: 'SEARCH',
						name: '검색',
						key: 'itemName',
						placeholder: '아이템명을 검색해 주세요.'
					},
					{
						type: 'CATEGORY',
						name: '카테고리',
						key: 'categoryCode',
						data: options.categories
					},
					{
						type: 'KEYWORD',
						name: '직업',
						key: 'characterClass',
						data: options.classes.map((value) => ({
							key: value,
							name: value
						}))
					},
					{
						type: 'KEYWORD',
						name: '등급',
						key: 'itemGrade',
						data: options.itemGrades.map((value) => ({
							key: value,
							name: value
						}))
					},
					{
						type: 'KEYWORD',
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
					},
					{
						type: 'KEYWORD',
						name: '정렬 조건',
						key: 'sortCondition',
						data: [
							{ key: 'ASC', name: '오름차순' },
							{ key: 'DESC', name: '내림차순' }
						]
					}
				]
			}
		});

		if (!modalResult.result) return;

		const { category, keyword, search } = modalResult.value;

		const current = new URLSearchParams(Array.from(query.entries()));

		const newMainCategory = category?.categoryCode.main;
		const newSubCategory = category?.categoryCode.sub;

		filterKeyArr.forEach((key) => current.delete(key));

		if (newMainCategory) current.set('mainCategory', `${newMainCategory}`);
		if (newSubCategory) current.set('subCategory', `${newSubCategory}`);

		Object.entries({ ...keyword, ...search }).forEach(([key, value]) => {
			if (value) current.set(key, `${value}`);
		});

		const searchQuery = current.toString();

		router.replace(`${pathname}${searchQuery ? `?${searchQuery}` : ''}`);
	};

	return {
		filter: {
			categoryCode: subCategory ?? mainCategory,
			characterClass,
			itemGrade,
			itemName,
			sort,
			sortCondition
		},
		onOpenFilter
	};
};

export default useMarketsFilter;

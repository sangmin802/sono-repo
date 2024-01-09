import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { IOptions } from '@/service/markets/types';

import { useModalDispatch } from '@/client-component/modal/provider';

const useMarketsFilter = (options: IOptions) => {
	const query = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const { onOpenModal } = useModalDispatch();

	const mainCategory = Number(query.get('mainCategory')) || 20000;
	const subCategory = Number(query.get('subCategory')) || undefined;
	const characterClass = query.get('characterClass') ?? undefined;
	const itemGrade = query.get('itemGrade') ?? undefined;
	const itemName = query.get('itemName') ?? undefined;
	const sort = query.get('sort') ?? undefined;
	const sortCondition = query.get('sortCondition') ?? undefined;

	const onOpenFilter = () => {
		onOpenModal({
			name: 'filterModal',
			props: {
				title: '거래소 필터',
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
				],
				onConfirm: (filter) => {
					const current = new URLSearchParams(Array.from(query.entries()));
					const { category, keyword, search } = filter;

					const mainCategory = category?.categoryCode.main;
					const subCategory = category?.categoryCode.sub;

					current.delete('subCategory');

					if (subCategory) current.set('subCategory', `${subCategory}`);
					if (mainCategory) current.set('mainCategory', `${mainCategory}`);

					Object.entries({ ...keyword, ...search }).forEach(([key, value]) => {
						if (value) current.set(key, `${value}`);
					});

					const searchQuery = current.toString();

					router.replace(`${pathname}${searchQuery ? `?${searchQuery}` : ''}`);
				}
			}
		});
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

import { useSearchParams } from 'next/navigation';

const useMarketsFilter = () => {
	/**
	 * @see {@link https://nextjs.org/blog/next-14-1#other-improvements}
	 * 14.1부터 useSearchParams hook이 Suspense로 감싸져 있지 않으면 build가 실패하도록 변경됨
	 */
	const query = useSearchParams();

	const mainCategory = Number(query.get('mainCategory')) || 20000;
	const subCategory = Number(query.get('subCategory')) || undefined;
	const characterClass = query.get('characterClass') ?? undefined;
	const itemGrade = query.get('itemGrade') ?? undefined;
	const itemName = query.get('itemName') ?? undefined;
	const sort = query.get('sort') ?? undefined;
	const sortCondition = query.get('sortCondition') ?? undefined;

	return {
		mainCategory,
		subCategory,
		characterClass,
		itemGrade,
		itemName,
		sort,
		sortCondition
	};
};

export default useMarketsFilter;

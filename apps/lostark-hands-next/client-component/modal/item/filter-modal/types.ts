export interface TFilter {
	category: Record<string, { main: number; sub?: number }>;
	keyword: Record<string, string | number>;
	search: Record<string, string>;
}

export type TOnChangeFilter = (
	...args:
		| ['CATEGORY', TFilter['category']]
		| ['KEYWORD', TFilter['keyword']]
		| ['SEARCH', TFilter['search']]
) => void;

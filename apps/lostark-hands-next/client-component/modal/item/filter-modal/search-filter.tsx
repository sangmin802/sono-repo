'use client';

import { Input } from '@sono-repo/ui';

import type { TOnChangeFilter } from '@/client-component/modal/item/filter-modal/types';

const SearchFilter = ({
	dataIndex,
	name,
	value,
	placeholder,
	onChange
}: {
	dataIndex: string;
	name: string;
	value: string;
	placeholder?: string;
	onChange: TOnChangeFilter;
}) => {
	const handleChangeInput = (value: string) => {
		onChange('SEARCH', { [dataIndex]: value });
	};

	return (
		<div className="flex items-end space-x-[8px] px-[4px]">
			<div className="shrink-0 text-[16px] leading-[29px]">{name}</div>
			<Input
				className="grow bg-transparent font-semibold"
				placeholder={placeholder}
				value={value}
				onChange={handleChangeInput}
			/>
		</div>
	);
};

export default SearchFilter;

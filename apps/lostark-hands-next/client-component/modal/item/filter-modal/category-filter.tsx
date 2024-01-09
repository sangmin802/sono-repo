'use client';

import { useMemo } from 'react';
import cn from 'classnames';

import { Accordion } from '@sono-repo/ui';

import type { TOnChangeFilter } from '@/client-component/modal/item/filter-modal/types';

import type { ICode } from '@/type';

const CategoryFilter = ({
	dataIndex,
	name,
	category,
	data,
	onChange
}: {
	dataIndex: string;
	name: string;
	category: { main: number; sub?: number };
	data: (ICode & {
		subs: ICode[];
	})[];
	onChange: TOnChangeFilter;
}) => {
	const subList = useMemo(
		() => data.find((item) => item.code === category.main),
		[data, category]
	)?.subs;

	const handleChangeMain = (code: number) => {
		onChange('CATEGORY', { [dataIndex]: { ...category, main: code, sub: 0 } });
	};

	const handleChangeSub = (code: number) => {
		onChange('CATEGORY', { [dataIndex]: { ...category, sub: code } });
	};

	return (
		<Accordion
			summary={{ children: name }}
			details={{
				children: (
					<div className="flex">
						<div className="shrink-0 grow">
							{data.map(({ code, codeName }) => (
								<div
									key={code}
									className={cn('cursor-pointer', {
										'font-bold': category.main === code,
										'text-main-40': category.main !== code
									})}
									onClick={() => handleChangeMain(code)}
								>
									{codeName}
								</div>
							))}
						</div>
						<div className="shrink-0 grow">
							{subList?.map(({ code, codeName }) => (
								<div
									key={code}
									className={cn('cursor-pointer', {
										'font-bold': category.sub === code,
										'text-main-40': category.sub !== code
									})}
									onClick={() => handleChangeSub(code)}
								>
									{codeName}
								</div>
							))}
						</div>
					</div>
				)
			}}
		/>
	);
};

export default CategoryFilter;

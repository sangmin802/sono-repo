'use client';

import { useMemo } from 'react';
import cn from 'classnames';

import { Collapse } from '@sono-repo/ui';

import type { ICode } from '@/type';

import type { TOnChangeFilter } from './types';

const CategoryFilter = ({
	dataIndex,
	name,
	category,
	data,
	onChange
}: {
	dataIndex: string;
	name: string;
	category?: { main?: number; sub?: number };
	data: (ICode & {
		subs: ICode[];
	})[];
	onChange: TOnChangeFilter;
}) => {
	const subList = useMemo(
		() => data.find((item) => item.code === category?.main),
		[data, category]
	)?.subs;

	const handleChangeMain = (code: number) => {
		onChange('CATEGORY', { [dataIndex]: { ...category, main: code, sub: 0 } });
	};

	const handleChangeSub = (code: number) => {
		const main = category?.main;
		if (!main) return;

		onChange('CATEGORY', { [dataIndex]: { main, sub: code } });
	};

	return (
		<>
			<Collapse.Summary>{name}</Collapse.Summary>
			<Collapse.Content className="flex">
				<div className="shrink-0 grow">
					{data.map(({ code, codeName }) => (
						<div
							key={code}
							className={cn('cursor-pointer', {
								'font-bold': category?.main === code,
								'text-main-40': category?.main !== code
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
								'font-bold': category?.sub === code,
								'text-main-40': category?.sub !== code
							})}
							onClick={() => handleChangeSub(code)}
						>
							{codeName}
						</div>
					))}
				</div>
			</Collapse.Content>
		</>
	);
};

export default CategoryFilter;

'use client';

import { Fragment, type ReactNode } from 'react';

interface IDataEmptyFunnelProps {
	className?: string;
	children: ReactNode;
	data: { status: boolean; fallback?: ReactNode };
	as?: 'fragment' | 'div';
}

const DataEmptyFunnel = ({
	className,
	children,
	data,
	as
}: IDataEmptyFunnelProps) => {
	const isFragment = as === 'fragment';
	const Tag = isFragment ? Fragment : 'div';

	return (
		<Tag {...(!isFragment && { className })}>
			{data.status ? (
				<div className="whitespace-pre-line text-[12px] text-gray-400">
					{data.fallback}
				</div>
			) : (
				children
			)}
		</Tag>
	);
};

export default DataEmptyFunnel;

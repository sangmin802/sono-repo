import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import { TEXT_STYLE } from './_constants';

export const LevelInfo = ({
	label,
	children
}: PropsWithChildren<{ label: string }>) => (
	<div className="flex flex-col gap-y-[4px]">
		<div className={cn('text-gray-400', TEXT_STYLE)}>{label}</div>
		<div className={TEXT_STYLE}>{children}</div>
	</div>
);

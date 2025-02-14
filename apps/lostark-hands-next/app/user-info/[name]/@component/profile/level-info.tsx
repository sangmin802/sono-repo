import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import { TEXT_STYLE } from './constants';

export const LevelInfo = ({
	label,
	children
}: PropsWithChildren<{ label: string }>) => (
	<div className="space-y-[4px]">
		<div className={cn('text-gray-400', TEXT_STYLE)}>{label}</div>
		<div className={TEXT_STYLE}>Lv. {children}</div>
	</div>
);

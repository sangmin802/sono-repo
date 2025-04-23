'use client';

import type { TCalendarData } from '../types';
import DailyContentSection from './section';

interface IDailyContentProps {
	data: TCalendarData;
}

const DailyContent = ({ data: { daily } }: IDailyContentProps) => {
	return (
		<div className="flex flex-col gap-y-[16px]">
			{Object.values(daily).map((item) => (
				<DailyContentSection
					key={item.title}
					{...item}
				/>
			))}
		</div>
	);
};

export default DailyContent;

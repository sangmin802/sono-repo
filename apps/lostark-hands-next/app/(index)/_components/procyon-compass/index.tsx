'use client';

import ProcyonCompassSection from '@/app/(index)/_components/procyon-compass/section';

import type { TCalendarData } from '../_types';

interface IProcyonCompassProps {
	data: TCalendarData;
}

const ProcyonCompass = ({ data: { procyon } }: IProcyonCompassProps) => {
	return (
		<section className="grid gap-[16px] md:grid-cols-3">
			{Object.values(procyon).map((item) => (
				<ProcyonCompassSection
					key={item.title}
					{...item}
				/>
			))}
		</section>
	);
};

export default ProcyonCompass;

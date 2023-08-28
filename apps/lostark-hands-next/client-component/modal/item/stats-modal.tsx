'use-client';

import type { IStat } from '@/service/armories/types';

import Label from '@/client-component/label';

import type { ToCamelKey } from '@/type';

import ModalLayout from '../layout';

interface IStatsModalProps {
	stats: ToCamelKey<IStat>[];
}

const StatsModal = ({ stats }: IStatsModalProps) => {
	return (
		<ModalLayout
			title="능력치"
			footerProps={{ cancel: { show: false } }}
			containerClassName="space-y-[12px]"
		>
			{stats.map(({ type, value, tooltip }) => (
				<div key={type}>
					<div className="flex items-center space-x-[4px]">
						<Label>{type}</Label>
						<div>{value}</div>
					</div>
					<div className="mt-[6px] pl-[4px]">
						{tooltip.map((content, idx) => (
							<div
								className="[&_font]:font-bold [&_font]:text-orange-400"
								key={idx}
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						))}
					</div>
				</div>
			))}
		</ModalLayout>
	);
};

export default StatsModal;

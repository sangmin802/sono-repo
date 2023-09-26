'use client';

import type { IStat } from '@/service/armories/types';

import DangerousHTML from '@/client-component/dangerous-html';
import Label from '@/client-component/label';
import ModalLayout from '@/client-component/modal/layout';

import type { ToCamelKey } from '@/type';

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
							<DangerousHTML
								key={idx}
								html={content}
							/>
						))}
					</div>
				</div>
			))}
		</ModalLayout>
	);
};

export default StatsModal;

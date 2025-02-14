import Label from '@/client-component/label';
import RewardIcon from '@/client-component/reward-icon';

import { GOLD_ICON_URL } from '@/constant';

const PriceLabel = ({ label, price }: { label: string; price: number }) => {
	return (
		<div className="flex items-center">
			<Label className="mr-[4px] w-[68px] shrink-0 text-[12px]">{label}</Label>
			<div className="flex shrink-0 grow justify-end text-[12px]">
				{price.toLocaleString()}
				<RewardIcon
					name="골드"
					path={GOLD_ICON_URL}
				/>
			</div>
		</div>
	);
};

export default PriceLabel;

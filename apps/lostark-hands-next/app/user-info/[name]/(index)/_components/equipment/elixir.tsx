import { Chip } from '@sono-repo/ui';

import type { ISelectedArmoryEquipment } from '@/service/armories/_types';

interface IElixirProps {
	data: Exclude<ISelectedArmoryEquipment['elixir'], undefined>;
}

const Elixir = ({ data }: IElixirProps) => {
	return (
		<div className="flex shrink-0 gap-x-[4px]">
			{data.map((value) => (
				<Chip
					key={value}
					type="info"
				>
					{value}
				</Chip>
			))}
		</div>
	);
};

export default Elixir;

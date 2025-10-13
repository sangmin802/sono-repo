import type { ISelectedArmoryEquipment } from '@/service/armories/_types';

import ThumbnailCard from '@/client-component/thumbnail-card';

import { CDN_URL, EMO_IMAGE_URL } from '@/constants';

const Transcendence = (
	data: Exclude<ISelectedArmoryEquipment['transcendence'], undefined>
) => {
	return (
		<ThumbnailCard
			className="h-[18px] w-[18px]"
			src={`${CDN_URL}/${EMO_IMAGE_URL.emoticon_Transcendence_Grade}`}
			alt="transcendence"
		>
			<div className="flex">
				<div className="text-[12px]">x{data.grade}</div>
				<div className="text-[12px] font-bold">+{data.total}</div>
			</div>
		</ThumbnailCard>
	);
};

export default Transcendence;

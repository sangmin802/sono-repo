import ServerWrapper from '@/app/server-wrapper';

import { getCollectibleApi, getEquipmentApi } from '@/service/armories';
import { equipmentSelector } from '@/service/armories/selector';

import Collection from './@component';
import CollectionMedal from './@component/medal';
import CollectionMedalSkeleton from './@component/medal/skeleton';
import CollectionSkeleton from './@component/skeleton';

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<div className="flex flex-col-reverse lg:flex-row lg:space-x-[16px]">
			<ServerWrapper
				fallback={<CollectionSkeleton />}
				apiPromise={getCollectibleApi(name)}
				render={Collection}
			/>
			<ServerWrapper
				fallback={<CollectionMedalSkeleton />}
				apiPromise={getEquipmentApi(name)}
				selector={equipmentSelector}
				render={CollectionMedal}
			/>
		</div>
	);
};

export default Page;

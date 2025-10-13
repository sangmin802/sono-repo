import ServerWrapper from '@/app/server-wrapper';

import { getCollectibleApi, getEquipmentApi } from '@/service/armories';
import { equipmentSelector } from '@/service/armories/selector';

import Collection from './_components/collection';
import CollectionMedal from './_components/medal';
import CollectionMedalSkeleton from './_components/medal/skeleton';
import CollectionSkeleton from './_components/skeleton';

const Page = async ({ params }: { params: { name: string } }) => {
	const { name } = await params;
	return (
		<div className="flex flex-col-reverse lg:flex-row lg:gap-x-[16px]">
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

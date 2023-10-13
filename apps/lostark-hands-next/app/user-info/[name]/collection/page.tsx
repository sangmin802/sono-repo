import { getCollectibleApi, getEquipmentApi } from '@/service/armories';
import { equipmentSelector } from '@/service/armories/selector';

import Collection from '@/client-component/pages/user-info/collection';
import CollectionMedal from '@/client-component/pages/user-info/collection-medal';

/**
 * cache time 5min
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate}
 */
export const revalidate = 300;

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const [equipment, collection] = await Promise.all([
		getEquipmentApi(name),
		getCollectibleApi(name)
	]);

	const { col } = equipmentSelector(equipment);
	const sortedCollection = collection.map((item) => ({
		...item,
		collectiblePoints: item.collectiblePoints.sort((_, b) =>
			b.maxPoint !== b.point ? 0 : -1
		)
	}));

	return (
		<div className="flex flex-col-reverse lg:flex-row lg:space-x-[16px]">
			<Collection data={sortedCollection} />
			<CollectionMedal data={col} />
		</div>
	);
};

export default Page;

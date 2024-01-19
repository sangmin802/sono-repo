import { Suspense } from 'react';

import ServerWrapper from '@/app/server-wrapper';

import { getCollectibleApi, getEquipmentApi } from '@/service/armories';
import { equipmentSelector } from '@/service/armories/selector';

import Collection from '@/app/user-info/[name]/collection/@component';
import CollectionMedal from '@/app/user-info/[name]/collection/@component/medal';

const CollectionMedalRender = ({
	col
}: ReturnType<typeof equipmentSelector>) => <CollectionMedal data={col} />;

const Page = ({ params: { name } }: { params: { name: string } }) => {
	return (
		<div className="flex flex-col-reverse lg:flex-row lg:space-x-[16px]">
			<Suspense
				fallback={
					<div className="h-[200px] w-[200px] bg-amber-200">와난!!</div>
				}
			>
				<ServerWrapper
					apiPromise={getCollectibleApi(name)}
					render={(data) => (
						<Collection
							data={data.map((item) => ({
								...item,
								collectiblePoints: item.collectiblePoints.sort((_, b) =>
									b.maxPoint !== b.point ? 0 : -1
								)
							}))}
						/>
					)}
				/>
			</Suspense>
			<Suspense
				fallback={<div className="h-[200px] w-[200px] bg-blue-300">와난!!</div>}
			>
				<ServerWrapper
					apiPromise={getEquipmentApi(name)}
					selector={equipmentSelector}
					render={CollectionMedalRender}
				/>
			</Suspense>
		</div>
	);
};

export default Page;

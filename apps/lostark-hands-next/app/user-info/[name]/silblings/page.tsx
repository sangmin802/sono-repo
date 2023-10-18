import { getSilblingsInfoApi } from '@/service/characters';
import { sliblingListSelector } from '@/service/characters/selector';

import Silblings from '@/client-component/pages/user-info/silblings';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const silblings = await getSilblingsInfoApi(name);

	const filteredSilblings = sliblingListSelector(silblings);

	return <Silblings data={filteredSilblings} />;
};

export default Page;

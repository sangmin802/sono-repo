import { getArmoriesInfoApi } from '@/service/armories';
import { getCharactersInfoApi } from '@/service/characters';

import { pascalToCamel, pascalToCamelInArray } from '@/util/selector';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const [charactersInfo, armoriesInfo] = await Promise.all([
		getCharactersInfoApi(name, pascalToCamelInArray),
		getArmoriesInfoApi(name, pascalToCamel)
	]);

	return <div></div>;
};

export default Page;

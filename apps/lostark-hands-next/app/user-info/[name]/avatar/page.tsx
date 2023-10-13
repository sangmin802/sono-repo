import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import Avatar from '@/client-component/pages/user-info/avatar';

/**
 * cache time 5min
 * {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate}
 */
export const revalidate = 300;

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const avatar = await getAvatarApi(name);

	const filteredAvatar = avatarSelector(avatar);

	return <Avatar data={filteredAvatar} />;
};

export default Page;

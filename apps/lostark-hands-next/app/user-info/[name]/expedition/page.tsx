import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import Avatar from '@/client-component/pages/user-info/avatar';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const avatar = await getAvatarApi(name);

	const filteredAvatar = avatarSelector(avatar);

	return <Avatar data={filteredAvatar} />;
};

export default Page;

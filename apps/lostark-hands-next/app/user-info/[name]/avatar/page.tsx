import { getAvatarApi } from '@/service/armories';
import { avatarSelector } from '@/service/armories/selector';

import Avatar from '@/app/user-info/[name]/avatar/@component';

const Page = async ({ params: { name } }: { params: { name: string } }) => {
	const avatar = await getAvatarApi(name);

	const filteredAvatar = avatarSelector(avatar);

	return <Avatar data={filteredAvatar} />;
};

export default Page;

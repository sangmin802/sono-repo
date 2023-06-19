import { type FC } from 'react';

import Event from '@/component/pages/home/event';
import Update from '@/component/pages/home/notice';

const Page: FC = () => {
	return (
		<div>
			<Update />
			<Event />
		</div>
	);
};

export default Page;

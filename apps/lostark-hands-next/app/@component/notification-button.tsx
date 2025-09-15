'use client';

import { IoNotificationsOutline } from 'react-icons/io5';
import cn from 'classnames';

import { Button } from '@sono-repo/ui';

import useClientRendered from '@/hooks/use-client-rendered';
import useNotification from '@/hooks/use-notification';

import Notification from '@/worker/notification';

const NotificationButton = () => {
	const { status } = useNotification();
	const isRendered = useClientRendered();

	const handleClickNotice = () => {
		Notification.onRequestPermission();
	};

	if (!isRendered || status !== 'default') return null;

	return (
		<Button
			className={cn(
				'fixed bottom-[4%] right-[6%] flex size-[40px] items-center justify-center rounded-[50%]',
				'bg-gray-800/[.6] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]'
			)}
			onClick={handleClickNotice}
		>
			<IoNotificationsOutline className="size-[26px]" />
		</Button>
	);
};

export default NotificationButton;

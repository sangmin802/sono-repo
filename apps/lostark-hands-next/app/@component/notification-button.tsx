'use client';

import cn from 'classnames';
import Image from 'next/image';

import { Button } from '@sono-repo/ui';

import useClientRendered from '@/hook/use-client-rendered';
import useNotification from '@/hook/use-notification';

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
				'fixed bottom-[4%] right-[6%] flex h-[40px] w-[40px] items-center justify-center rounded-[50%]',
				'bg-gray-800/[.6] shadow-[2px_2px_8px_rgba(0,0,0,0.32)]'
			)}
			onClick={handleClickNotice}
		>
			<Image
				width={26}
				height={26}
				alt="notificationPermission"
				src="/icons/alert/icons8-96.png"
			/>
		</Button>
	);
};

export default NotificationButton;

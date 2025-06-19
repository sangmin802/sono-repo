import { useEffect, useSyncExternalStore } from 'react';

import Notification from '@/worker/notification';

const useNotification = (
	{ title, body }: Partial<Record<'title' | 'body', string>> = {
		title: '',
		body: ''
	}
) => {
	const status = useSyncExternalStore(
		Notification.onSubscribe,
		Notification.getStatus,
		Notification.getStatus
	);

	useEffect(() => {
		return () => {
			Notification.onCreateNotification(title, body);
		};
	}, [title, body]);

	return { status };
};

export default useNotification;

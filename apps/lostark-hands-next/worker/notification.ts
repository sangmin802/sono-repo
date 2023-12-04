class CreateNotification {
	public subscribe: (() => void) | null = null;

	getStatus() {
		if (typeof window === 'undefined' || !('Notification' in window))
			return undefined;

		return Notification.permission;
	}

	onSubscribe = (listener: () => void) => {
		this.subscribe = listener;
		return () => {
			this.subscribe = null;
		};
	};

	onRequestPermission = () => {
		if (!('Notification' in window)) {
			alert('알림기능이 지원되지 않는 환경입니다.');
			return;
		}

		Notification.requestPermission().then((value) => {
			if (value !== 'granted') return;

			this.subscribe?.();
		});
	};

	onCreateNotification = (title?: string, body?: string) => {
		if (this.getStatus() !== 'granted') return;
		if (!title || !body) return;

		new Notification(title, {
			body,
			icon: '/icons/logo/logo.png'
		});
	};
}

/**
 * 이거 서버에서는 생성되면 안될것같음
 */
const notification = new CreateNotification();

export default notification;

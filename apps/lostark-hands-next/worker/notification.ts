class CreateNotification {
	public subscribe: (() => void) | null = null;

	getStatus() {
		if (typeof window === 'undefined' || !('Notification' in window))
			return undefined;

		return Notification.permission;
	}

	// 객체에 대한 구독을 시도하면 반환되는 listener는, 내가 객체에 대한 값이 변경되었을 때, 호출되는 함수임.
	// react 기준, rerender를 발생시키는 함수이기 때문에 객체를 변경하는 setter 내부에서 변경 이후, 이 함수를 호출하면 react.state가 변경된것 처럼 rerender가 발생됨
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

			navigator.serviceWorker.register('/pwa-sw.js');

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

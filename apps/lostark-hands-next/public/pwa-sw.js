self.addEventListener('install', async (e) => {
	console.log('👀 - 설치 완료!');
	e.waitUntil(self.skipWaiting());

	/**
	 * 이 api 용도가 뭐지 근데..?
	 */
	setInterval(async () => {
		const { data } = await fetch(`${self.location.origin}/api/alarms`, {
			method: 'GET'
		}).then((res) => res.json());

		console.log(data);

		self.navigator.setAppBadge(100);

		self.registration.showNotification('ServiceWorker Cookbook', {
			body: '워커 알림 테스트'
		});
	}, 30 * 1000);
});

self.addEventListener('activate', () => {
	console.log('👀 - 활성화 완료!');
});

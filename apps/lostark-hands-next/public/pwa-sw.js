const fetchSomething = async () => {
	setInterval(() => {
		self.navigator.setAppBadge(Math.ceil(Math.random() * 10));
	});

	self.registration.showNotification('ServiceWorker Cookbook', {
		body: '로아핸즈'
	});
};

self.addEventListener('install', async (e) => {
	console.log('👀 - 설치 완료!');
	e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', () => {
	console.log('👀 - 활성화 완료!');

	fetchSomething();
});

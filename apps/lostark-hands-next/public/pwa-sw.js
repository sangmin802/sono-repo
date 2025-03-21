self.addEventListener('install', async (e) => {
	console.log('👀 - 설치 완료!');
	e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', () => {
	console.log('👀 - 활성화 완료!');
});

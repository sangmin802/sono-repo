self.addEventListener('install', (e) => {
	console.log('👀 - 설치', e);
	e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
	console.log('👀 - 활성화', e);
});

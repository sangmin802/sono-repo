self.addEventListener('install', (e) => {
	console.log('👀 - install', e);
	e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
	console.log('👀 - activate', e);
});

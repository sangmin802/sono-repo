/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * next13 appDir 호환 가능한 next-pwa
 * @link https://github.com/DuCanhGH/next-pwa
 */
const withPWA = require('@ducanh2912/next-pwa').default({
	dest: 'public',
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true
});

/**
 * @type {import('next').NextConfig}
 * @link https://beta.nextjs.org/docs/api-reference/next-config
 * 13.4부터 appDir이 기본
 */
module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['cdn-lostark.game.onstove.com', 'img.lostark.co.kr']
	}
});

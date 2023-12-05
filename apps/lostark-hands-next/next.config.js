/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * next13 appDir 호환 가능한 next-pwa
 * @link https://github.com/DuCanhGH/next-pwa
 * 이거 모노레포에서 sw파일 읽을 때 무한 리로딩 문제가 있음.. 다른 일반 레포에 동일하게 올려봤는데, 그 환경은 동일 문제 없음..
 * 제거...
 */
// const withPWA = require('@ducanh2912/next-pwa').default({
// 	dest: 'public',
// 	cacheOnFrontEndNav: true,
// 	aggressiveFrontEndNavCaching: true
// });

/**
 * @type {import('next').NextConfig}
 * @link https://beta.nextjs.org/docs/api-reference/next-config
 * 13.4부터 appDir이 기본
 */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['cdn-lostark.game.onstove.com', 'img.lostark.co.kr']
	},
	transpilePackages: ['@sono-repo/ui', '@sono-repo/util']
};

/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import('next').NextConfig}
 * @link https://beta.nextjs.org/docs/api-reference/next-config
 * 13.4부터 appDir이 기본
 */
module.exports = {
	reactStrictMode: false,
	/**
	 * 배포 도커라이징 시, 활성화
	 */
	// output: 'standalone',
	images: {
		domains: ['cdn-lostark.game.onstove.com', 'img.lostark.co.kr']
	}
};

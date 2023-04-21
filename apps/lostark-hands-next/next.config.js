// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
	dest: 'public',
	/** Next13 / PWA bad-precaching-response issue
	 * @link https://github.com/shadowwalker/next-pwa/issues/424
	 */
	buildExcludes: [/app-build-manifest.json$/]
});

/**
 * @type {import('next').NextConfig}
 * @link https://beta.nextjs.org/docs/api-reference/next-config
 */
module.exports = withPWA({
	experimental: {
		appDir: true
	},
	transpilePackages: ['@sono-repo/ui']
});

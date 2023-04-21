// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
	dest: 'public',
	buildExcludes: [/app-build-manifest.json$/]
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
	experimental: {
		appDir: true
	},
	transpilePackages: ['@sono-repo/ui']
});

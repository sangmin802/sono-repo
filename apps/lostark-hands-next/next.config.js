/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	transpilePackages: ['@sono-repo/ui']
};

module.exports = nextConfig;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: ['sono-repo/tailwindcss'],
	settings: {
		tailwindcss: {
			/**
			 * {@link https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/241}
			 */
			config: path.join(__dirname, './tailwind.config.js')
		}
	}
};

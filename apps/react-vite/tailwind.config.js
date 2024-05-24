/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		path.join(path.dirname(require.resolve('@sono-repo/ui')), '**/*.{cjs,mjs}'),
		'src/**/*.{js,ts,jsx,tsx}'
	],
	presets: [require('@sono-repo/ui/config')],
	theme: {}
};

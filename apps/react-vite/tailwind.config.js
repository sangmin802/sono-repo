import path from 'path';

import sonoRepoUiConfig from '@sono-repo/ui/config';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// eslint-disable-next-line no-undef
		path.join(path.dirname(require.resolve('@sono-repo/ui')), '**/*.{cjs,mjs}'),
		'src/**/*.{js,ts,jsx,tsx}'
	],
	presets: [sonoRepoUiConfig],
	theme: {}
};

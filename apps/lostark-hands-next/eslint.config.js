import { flatConfig as nextEslint } from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

import sonoRepoTailwindcssEslint from '@sono-repo/eslint-config/tailwindcss';

export default defineConfig([
	...sonoRepoTailwindcssEslint,
	// next recommededRules included
	nextEslint.coreWebVitals
]);

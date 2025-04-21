import { defineConfig } from 'eslint/config';
import tailwindcssConfig from 'eslint-plugin-tailwindcss';

import baseConfig from '../eslint.config.js';

/** @type { import("eslint").Linter.Config } */
export default defineConfig([
	...baseConfig,
	...tailwindcssConfig.configs['flat/recommended'],
	{
		settings: {
			tailwindcss: {
				callees: ['classnames', 'cn']
			}
		}
	}
]);

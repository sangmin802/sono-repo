import { defineConfig } from 'eslint/config';

import baseConfig from '../eslint.config.js';

/** @type { import("eslint").Linter.Config } */
export default defineConfig([...baseConfig, { ignores: ['**/*.css'] }]);

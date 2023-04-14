/** @type { import("eslint").Linter.Config} */
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	env: {
		node: true,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'max-len': ['error', { code: 120 }],
	},
};

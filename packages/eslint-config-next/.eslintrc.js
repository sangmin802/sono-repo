/** @type { import("eslint").Linter.Config } */
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		node: true
	},
	plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'plugin:prettier/recommended'
	],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'max-len': ['error', { code: 120 }],
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// Packages `react` related packages come first.
					['^react', '^@?\\w'],
					// monorepo package.json
					['@sono-repo/*'],
					// services
					['@/*/services'],
					// hooks
					['@/*/hooks'],
					// utils
					['@/*/utils'],
					// components
					['@/*/components'],
					// layouts
					['@/*/layouts'],
					// context
					['@/*/contexts'],
					// constant
					['@/*/constants'],
					// types
					['@/*/types'],
					// router
					['@/*/router'],
					// assets
					['@/*/assets'],
					// Style imports.
					['(!^@)(^.+)\\.(css)$']
				]
			}
		]
	}
};

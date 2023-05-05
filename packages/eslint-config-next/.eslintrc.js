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
					['@/app'],
					// services
					['@/*/service'],
					// hooks
					['@/*/hook'],
					// utils
					['@/*/util'],
					// components
					['@/*/component'],
					// layouts
					['@/*/layout'],
					// context
					['@/*/context'],
					// constant
					['@/*/constant'],
					// types
					['@/*/type'],
					// router
					['@/*/router'],
					// assets
					['@/*/asset'],
					// Style imports.
					['(!^@)(^.+)\\.(css)$']
				]
			}
		]
	}
};

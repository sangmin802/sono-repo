/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
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
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				fixStyle: 'separate-type-imports'
			}
		],
		'import/no-anonymous-default-export': [
			'warn',
			{
				allowObject: true
			}
		],
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					['^react', '^react', '^@?\\w'],
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
					['@/*/.*component'],
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

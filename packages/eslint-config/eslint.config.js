import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * config에 그냥 넣는 애들은 최소 { name: ??, rules: 각 라이브러리 rules } 형식이 유지된 애들임
     [ 
  			baseConfig(plugin, parser), <- {..., plugins: {'@typescript-eslint': plugin}} 반환함
  			{
        name: 'typescript-eslint/recommended',
        rules: {
            '@typescript-eslint/ban-ts-comment': 'error',
						...
        },
}]
 * 이 경우, { plugins: { [name]: 각 라이브러리 rules가 든 플러그인 } }가 적용되지 않은 애들은, rules를 커스텀해줄 때, 앞에 라이브러리 이름 구분이 안됨
 *   - ex) max-len 은 eslint.configs.recommended 관련인데, 얘는 plugins: { [name << 이거 없음]: ?? } 이 부여되어있지 않아 전체에서 탐색함
 * {
 *     plugins: { react: plugin }, << React는 이렇게 react라는 이름이 있음. 위 타입스크립트 플러그인도 존재함
    	rules: configs.recommended.rules
		}
 */

/** @type { import("eslint").Linter.Config } */
export default defineConfig([
	globalIgnores(['node_modules/*', 'dist/*', 'build/*', 'out/*', '.next/*']),
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		}
	},
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					fixStyle: 'separate-type-imports'
				}
			],
			'@typescript-eslint/no-unused-expressions': ['off']
		}
	},
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	{
		rules: {
			'max-len': ['error', { code: 180 }],
			'prettier/prettier': ['error', { endOfLine: 'auto' }]
		}
	},
	eslintPluginReact.configs.flat.recommended,
	{
		rules: {
			'react/react-in-jsx-scope': 'off'
		}
	},
	eslintPluginReactHooks.configs['recommended-latest'],
	{
		plugins: {
			'simple-import-sort': simpleImportSort
		},
		rules: {
			'simple-import-sort/imports': [
				'warn',
				{
					groups: [
						['^react', '^react', '^@?\\w'],
						// monorepo package.json
						['@sono-repo/*'],
						// app
						['@/app'],
						// services
						['@/*/service'],
						// hooks
						['@/*/.*hook'],
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
	}
]);

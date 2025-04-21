import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

/**
 * config에 그냥 넣는 애들은 최소 { rules: 각 라이브러리 rules } 형식이 유지된 애들임
 * 이 경우, plugins: { name: 각 라이브러리 rules }가 적용되지 않은 애들은, rules를 커스텀해줄 때, 앞에 라이브러리 이름 구분이 안됨
 *   - ex) max-len 은 eslint.configs.recommended 관련인데, 얘는 plugins: { name } 이 부여되어있지 않아 전체에서 탐색함
 */

/** @type { import("eslint").Linter.Config } */
export default defineConfig([
	eslint.configs.recommended,
	tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					fixStyle: 'separate-type-imports'
				}
			]
		}
	},
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	{
		rules: {
			'max-len': ['error', { code: 120 }],
			'prettier/prettier': ['error', { endOfLine: 'auto' }]
		}
	},
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

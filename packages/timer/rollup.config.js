/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

/** @type {import('rollup').RollupOptions} */
module.exports = {
	input: 'src/index.ts',
	output: [
		{
			file: './dist/index.mjs',
			format: 'esm'
		},
		{
			file: './dist/index.cjs',
			format: 'cjs'
		}
	],
	// react is peerDependency
	external: ['react'],
	plugins: [
		resolve(),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.json'
		})
	]
};

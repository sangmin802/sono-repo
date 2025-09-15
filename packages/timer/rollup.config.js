import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/** @type {import('rollup').RollupOptions} */
export default {
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

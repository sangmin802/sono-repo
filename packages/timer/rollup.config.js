import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      file: "./dist/bundle.mjs",
      format: 'esm',
    },
    {
      file: "./dist/bundle.cjs",
      format: 'cjs',
    }
],
  // react is peerDependency
  external: ['react'],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
  ],
};
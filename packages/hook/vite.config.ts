import resolve from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		dts({
			outDir: 'dist',
			exclude: ['vite.config.ts']
		})
	],
	build: {
		lib: {
			entry: {
				index: path.resolve(__dirname, 'src/index.ts')
			},
			formats: ['cjs', 'es'],
			fileName: (format, entry) =>
				`${entry}.${format === 'es' ? 'mjs' : format}`
		},
		rollupOptions: {
			external: ['react'],
			plugins: [resolve()]
		}
	}
});

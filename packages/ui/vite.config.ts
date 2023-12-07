import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		dts({
			exclude: ['vite.config.ts', '.storybook/**/*']
		})
	],
	resolve: {
		alias: { '@': path.resolve(__dirname, './src') }
	},
	build: {
		lib: {
			entry: {
				/**
				 * @THINK build entry를 분리하여, exports field에서 path로 구분해줄 수 있으면 좋지 않을까
				 */
				index: path.resolve(__dirname, 'src/index.ts'),
				'fast-food/index': path.resolve(__dirname, 'src/fast-food/index.ts'),
				'fruit/index': path.resolve(__dirname, 'src/fruit/index.ts')
			},
			formats: ['cjs', 'es'],
			fileName: (format, entry) =>
				`${entry}.${format === 'es' ? 'mjs' : format}`
		},
		rollupOptions: {
			external: ['react', 'react-dom']
		}
	}
});

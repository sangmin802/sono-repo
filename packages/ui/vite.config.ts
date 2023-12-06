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
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['cjs', 'es'],
			fileName: (format) => {
				if (format === 'cjs') return 'index.cjs';
				return 'index.mjs';
			}
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'tailwindcss']
		}
	}
});

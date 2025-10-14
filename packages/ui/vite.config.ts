import resolve from '@rollup/plugin-node-resolve';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import glob from 'fast-glob';
import path from 'path';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(async () => {
	const entryFiles = await glob('*/index.ts', { cwd: 'src' });
	const libEntry = entryFiles.reduce<Record<string, string>>(
		(entryObj, entry) => {
			const newEntryObj = { ...entryObj };
			newEntryObj[entry.replace('.ts', '')] = path.resolve(
				__dirname,
				`src/${entry}`
			);
			return newEntryObj;
		},
		{}
	);

	return {
		plugins: [
			react(),
			dts({
				outDir: 'dist',
				exclude: ['vite.config.ts', '.storybook/**/*', 'src/stories/**/*']
			}),
			tailwindcss()
		],
		define: {
			outerEnv: 'process.env'
		},
		build: {
			minify: false,
			lib: {
				entry: libEntry,
				formats: ['cjs', 'es'],
				fileName: (format, entry) =>
					`${entry}.${format === 'es' ? 'mjs' : format}`
			},
			rollupOptions: {
				external: ['react', 'react-dom', 'tailwindcss'],
				plugins: [resolve()]
			}
		}
	} satisfies UserConfig;
});

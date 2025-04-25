import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			react({
				babel: {
					plugins: [
						['babel-plugin-react-compiler', { target: '19' }]
						// {
						// 	name: 'custom-babel-plugin',
						// 	visitor: {
						// 		Program: {
						// 			enter(prog, pass): void {
						// 				console.log('ENTER');
						// 			},
						// 			exit(_, pass): void {
						// 				console.log('EXIT');
						// 			}
						// 		}
						// 	}
						// }
					]
				}
			}),
			tailwindcss()
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			}
		},
		build: {
			minify: false,
			outDir: './dist'
		},
		envDir: path.resolve(__dirname, './.env'),
		cacheDir: path.resolve(__dirname, './.vite'),
		server: {
			port: 8000,
			host: true
		}
	};
});

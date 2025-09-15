// import { federation } from '@module-federation/vite';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			federation({
				name: 'react-counter',
				filename: 'react-counter.js',
				exposes: {
					'./create-counter': './src/components/module-federation/counter',
					'./count-store': './src/components/module-federation/count-store'
				}
			}),
			federation({
				name: 'react-link',
				filename: 'react-link.js',
				exposes: {
					'./create-link': './src/components/module-federation/link'
				}
			}),
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

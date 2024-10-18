/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#222',
				hello: 'green',
				main: {
					10: '#14181d',
					20: '#1b2028',
					30: '#262e39',
					40: '#455264'
				}
			}
		}
	},
	plugins: []
};

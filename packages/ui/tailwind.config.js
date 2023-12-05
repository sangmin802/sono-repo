/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// app
		'app/**/*.{js,ts,jsx,tsx}',
		'client-component/**/*.{js,ts,jsx,tsx}',
		'constant/**/*.{tsx,jsx,ts,js}'
	],
	theme: {
		extend: {
			colors: {
				black: '#222'
			}
		}
	},
	plugins: []
};

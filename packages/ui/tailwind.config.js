/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// packages
		'../../packages/**/*.{js,ts,jsx,tsx}',
		// app
		'app/**/*.{js,ts,jsx,tsx}',
		'**component/**/*.{js,ts,jsx,tsx}',
		'src/**/*.{js,ts,jsx,tsx}',
		'pages/**/*.{js,ts,jsx,tsx}',
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

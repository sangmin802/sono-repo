/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// packages
		'../../packages/**/*.{js,ts,jsx,tsx}',
		// app
		`app/**/*.{js,ts,jsx,tsx}`,
		`**component/**/*.{js,ts,jsx,tsx}`,
		`src/**/*.{js,ts,jsx,tsx}`,
		'pages/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				test: '#FC6C80'
			}
		}
	},
	plugins: []
};

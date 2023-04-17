/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// packages
		'../../packages/**/*.{js,ts,jsx,tsx}',
		// app
		`src/**/*.{js,ts,jsx,tsx}`,
		'pages/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
};

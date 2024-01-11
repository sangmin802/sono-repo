/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			transitionProperty: {
				'max-height': 'max-height'
			},
			colors: {
				black: '#222',
				hello: 'green'
			}
		}
	},
	plugins: []
};

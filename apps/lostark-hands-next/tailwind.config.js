/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@sono-repo/ui/config')],
	theme: {
		extend: {
			backgroundImage: {
				normal: 'linear-gradient(135deg, #232323, #575757)',
				advanced: 'linear-gradient(135deg, #18220b, #304911)',
				rare: 'linear-gradient(135deg, #111f2c, #113d5d)',
				epic: 'linear-gradient(135deg, #261331, #480d5d)',
				legendary: 'linear-gradient(135deg, #362003, #9e5f04)',
				relic: 'linear-gradient(135deg, #341a09, #a24006)',
				ancient: 'linear-gradient(135deg, #3d3325, #dcc999)',
				esther: 'linear-gradient(135deg, #0c2e2c, #2faba8)'
			},
			// The higher the number, the brighter the color
			colors: {
				main: {
					10: '#14181d',
					20: '#1b2028',
					30: '#262e39',
					40: '#455264'
				},
				normal: '#929292',
				advanced: '#304911',
				rare: '#6666FF',
				epic: '#c200c2',
				legendary: '#fb923c',
				relic: '#a24006',
				ancient: '#dcc999',
				esther: '#2faba8'
			}
		}
	}
};

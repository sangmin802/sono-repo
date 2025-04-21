/* eslint-disable max-len */
import path from 'path';

import sonoRepoUiConfig from '@sono-repo/ui/config';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// eslint-disable-next-line no-undef
		path.join(path.dirname(require.resolve('@sono-repo/ui')), '**/*.{cjs,mjs}'),
		'app/**/*.{js,ts,jsx,tsx}',
		'client-component/**/*.{js,ts,jsx,tsx}',
		'constant/**/*.{tsx,jsx,ts,js}'
	],
	presets: [sonoRepoUiConfig],
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
				esther: 'linear-gradient(135deg, #0c2e2c, #2faba8)',
				// eslint-disable-next-line no-undef
				collection: `url(${process.env.NEXT_PUBLIC_CDN_URL}/2018/obt/assets/images/pc/sprite/sprite_profile.png)`
			},
			// The higher the number, the brighter the color
			colors: {
				normal: '#929292',
				advanced: '#74a33c',
				rare: '#00b5ff',
				epic: '#c200c2',
				legendary: '#fb923c',
				relic: '#ff6000',
				ancient: '#dcc999',
				esther: '#2faba8',
				white: '#efefef'
			}
		}
	}
};

import {
	Controls,
	Description,
	Primary,
	Stories,
	Title
} from '@storybook/blocks';
import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		backgrounds: {
			values: [
				{ name: 'red', value: '#f00' },
				{ name: 'green', value: '#0f0' },
				{ name: 'blue', value: '#00f' }
			]
		},
		docs: {
			page: () => (
				<>
					<Title />
					<Description />
					<Primary />
					<Controls />
					<Stories />
				</>
			)
		}
	}
};

export default preview;

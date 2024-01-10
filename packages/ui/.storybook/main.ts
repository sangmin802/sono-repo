import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';

type TAddonType<T> = T extends (infer I)[] ? I : undefined;

function getAbsolutePath(
	value: string
): Exclude<TAddonType<StorybookConfig['addons']>, undefined> {
	return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions')
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite') as '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	viteFinal: (config) => ({
		...config,
		define: { 'process.env': {} }
	})
};
export default config;

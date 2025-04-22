/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
export default {
	singleQuote: true,
	semi: true,
	useTabs: true,
	tabWidth: 2,
	trailingComma: 'none',
	printWidth: 80,
	arrowParens: 'always',
	singleAttributePerLine: true,
	pluginSearchDirs: false
	// plugins: [require('prettier-plugin-tailwindcss')]
};

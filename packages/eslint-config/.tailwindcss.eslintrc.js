/** @type { import("eslint").Linter.Config } */
module.exports = {
	extends: [
    './.eslintrc.js', 
    'plugin:tailwindcss/recommended'
  ],
  settings: {
    tailwindcss: {
      callees: ['classnames', 'cn'],
    }
  }
};

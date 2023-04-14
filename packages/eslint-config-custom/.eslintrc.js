module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ["next", "turbo", "prettier"],
  plugins: ['@typescript-eslint'],
  rules: {
    "max-len": ["error", { code: 120 }],
  },
};

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
  ],
  root: true,
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-page-custom-font': 'off',
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'import/order': [
      "error",
      {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
  },
  ignorePatterns: ['*.js', 'node_modules/'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};

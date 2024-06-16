module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-unescaped-entities': 'off',
    'react-hooks/rules-of-hooks': 'warn',
  },
  env: {
    amd: true, //require
    node: true, //modules
  },
};

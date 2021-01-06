module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 2,
    'prettier/prettier': 'error',
    'implicit-arrow-linebreak': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-newline': 0,
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};

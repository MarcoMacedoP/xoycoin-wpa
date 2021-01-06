module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:react/recommended', //'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'import/order': 0,
    'no-unused-vars': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': 'error',
    'implicit-arrow-linebreak': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-newline': 0,
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};

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
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'no-plusplus': 0,
    'no-shadow': 0,
    'react/prop-types': 1,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': 'error',
    'implicit-arrow-linebreak': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-newline': 0,
    'react/react-in-jsx-scope': 'off',
    'react/no-danger': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};

module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['@babel'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    BigInt: true,
  },
  rules: {
    // eslint rules
    'array-callback-return': ['warn', { checkForEach: false }],
    'default-param-last': 'error',
    eqeqeq: ['warn', 'smart'],
    'linebreak-style': 'off',
    'no-eval': ['error', { allowIndirect: true }],
    'no-extend-native': 'warn',
    'no-implicit-coercion': 'warn',
    'no-promise-executor-return': 'warn',
    'no-shadow': 'warn',
    'no-unreachable-loop': 'warn',
    'no-unsafe-optional-chaining': 'error',
    'require-atomic-updates': 'warn',

    // plugin:import rules
    'import/extensions': 'off',
    'import/no-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
  },
};

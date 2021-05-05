module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
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
    'array-callback-return': ['error', { checkForEach: true }],
    'default-param-last': 'error',
    eqeqeq: ['error', 'smart'],
    'linebreak-style': 'off',
    'no-eval': ['error', { allowIndirect: true }],
    'no-extend-native': 'error',
    'no-implicit-coercion': 'error',
    'no-promise-executor-return': 'error',
    'no-shadow': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'require-atomic-updates': 'error',

    // plugin:import rules
    'import/extensions': ['error', { js: 'never', json: 'always' }],
    'import/no-default-export': 'warn',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',

    // eslint style rules, all covered by prettier
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
  },
};

// @ts-check

import config from '@exercism/eslint-config-javascript';
import maintainersConfig from '@exercism/eslint-config-javascript/maintainers.mjs';

import globals from 'globals';

export default [
  ...config,
  ...maintainersConfig,
  {
    files: maintainersConfig[1].files,
    rules: {
      'jest/expect-expect': ['warn', { assertFunctionNames: ['expect*'] }],
    },
  },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  // <<inject-rules-here>>
  {
    ignores: [
      // # Protected or generated
      '/.appends/**/*',
      '/.github/**/*',
      '/.vscode/**/*',

      // # Binaries
      '/bin/*',

      // # Configuration
      '/config',
      '/babel.config.js',

      // # Typings
      '/exercises/**/global.d.ts',
      '/exercises/**/env.d.ts',
    ],
  },
];

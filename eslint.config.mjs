// @ts-check

import config from '@exercism/eslint-config-javascript';
import maintainersConfig from '@exercism/eslint-config-javascript/maintainers.mjs';

import globals from 'globals';

export default [
  ...config,
  {
    files: ['.meta/proof.ci.js', '.meta/exemplar.js', '*.spec.js'],
    extends: maintainersConfig,
  },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
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

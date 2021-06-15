module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: '3.12',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-bigint'],
};

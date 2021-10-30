module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: '3.19',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-bigint'],
};

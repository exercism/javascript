module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: '3.10',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-bigint'],
};

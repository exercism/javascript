const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
      useBuiltIns: false,
    },
  ],
];

module.exports = { presets };

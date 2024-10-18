module.exports = {
  verbose: true,
  modulePathIgnorePatterns: ['package.json'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  reporters: [],
};

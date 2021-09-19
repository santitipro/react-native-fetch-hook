module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['!node_modules/react-runtime'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup-tests',
    '<rootDir>/__tests__/utils',
    '<rootDir>/e2e/',
  ],
};

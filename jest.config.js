module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  testMatch: ["**/__tests__/**/*.test.ts"],
  setupFilesAfterEnv: ['./jest.setup.js'], // Add this line to include the setup file
};


// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   testMatch: ['**/__tests__/**/*.ts'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   coverageDirectory: 'coverage',
//   collectCoverageFrom: ['src/**/*.ts'],
//   testMatch: ["**/__tests__/**/*.test.ts"],
//   setupFilesAfterEnv: ['./jest.setup.js'],
// };


// older configuration for nodejs environment
// module.exports = {
//     testEnvironment: 'node',
//     testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//     transform: {
//       '^.+\\.(ts|tsx)$': 'ts-jest',
//     },
//   };
  
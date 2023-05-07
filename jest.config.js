/* eslint-disable quotes */
/* eslint-disable indent */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
      '**/__tests__/**/*.spec.ts',
      '**/__tests__/**/*.test.ts',
      '**/__tests__/**/*.unit-test.ts',
      '**/__tests__/**/*.unit.ts',
      '**/__test__/**/*.spec.ts',
      '**/__test__/**/*.test.ts',
      '**/__tests__/**/*.e2e.ts'
    ],
    transform: {
      "^.+\\.(t|j)sx?$": "ts-jest"
    },
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
      '^domain/(.*)$': '<rootDir>/src/domain/$1',
      '^infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
      '^shared/(.*)$': '<rootDir>/src/shared/$1'
    }
// eslint-disable-next-line semi
}

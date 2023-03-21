export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: false,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.tsx?$': 'ts-jest',

    '^.+\\.scss$': [
      'jest-transform-stub',
      {
        moduleNameMapper: {
          '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
        },
        testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
      }
    ]
  }
}

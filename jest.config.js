/** @type {import('jest').Config} */
const config = {
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  moduleNameMapper: {
    '^#core/(.*)$': '<rootDir>/core/$1',
    '^#wrike/(.*)$': '<rootDir>/wrike/$1',
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporters", {
      "pageTitle": "Test Report - Wrike API",
      "publicPath": "./reports",
      "filename": "jest-report-wrike-api.html"
    }]
  ],
  setupFilesAfterEnv: ["./core/jest.setup.js"]
};

module.exports = config;
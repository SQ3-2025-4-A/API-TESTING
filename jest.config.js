/** @type {import('jest').Config} */

const config = {
  testMatch: [
    "**/*.test.js"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  moduleNameMapper: {
    "^#core/(.*)$": "<rootDir>/core/$1",
    "^#wrike/(.*)$": "<rootDir>/wrike/$1",
  },
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report - Wrike API",
      "outputPath": "./reports/wrike-api-tests.html"
    }]
  ],
  setupFilesAfterEnv: ["./core/jest.setup.js"]
};

module.exports = config;
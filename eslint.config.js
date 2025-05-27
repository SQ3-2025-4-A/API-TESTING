import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      "reports/**",
      "test/newman/**",
      "eslint.config.js",
    ],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "unambiguous",
      },
    },
  },
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    rules: {
      maxWarnings: 0,
      "import/no-commonjs": "off",
      "import/no-import-module-exports": "off",
      "no-unused-vars": "error",
      "no-undef": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
]);
import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  {
    ignores: [
      "node_modules/*",
      "reports/*",
      "**/newman/*",
      "eslint.config.js"
    ],
  },
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
]);
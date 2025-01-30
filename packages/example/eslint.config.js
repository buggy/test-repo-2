const eslintjs = require("@eslint/js");
const eslintts = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");

/** @type {import("eslint").Linter.Config} */
module.exports = [
  eslintjs.configs.recommended,
  ...eslintts.configs.strict,
  ...eslintts.configs.stylistic,
  eslintConfigPrettier,
  {
    ignores: ["dist/*", "eslint.config.js", "jest.config.js"],
  },
];

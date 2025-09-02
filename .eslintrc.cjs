module.exports = {
  root: true,
  env: { es2021: true, node: true, browser: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  plugins: ["@typescript-eslint", "import"],
  extends: ["google", "plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    // Google style 호환 조정
    "require-jsdoc": "off",
    "new-cap": "off",
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // import 정렬(선택)
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          { pattern: "app/**", group: "internal", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};

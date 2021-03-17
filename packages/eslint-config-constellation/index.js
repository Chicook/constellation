module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:jest-dom/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
    "prettier",
  ],
  plugins: [
    "simple-import-sort",
    "typescript-sort-keys",
    "json",
    "sort-destructure-keys",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "es2021",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    APP_VERSION: true,
  },
  env: {
    browser: true,
    "jest/globals": true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "react/prop-types": ["off"],
    "prefer-const": "error",
    "sort-keys": [
      "warn",
      "asc",
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "new-cap": "off",
    "no-alert": "error",
    "no-case-declarations": "off",
    "no-console": "error",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "generator-star-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "require-yield": "error",
    "space-before-function-paren": "error",
    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
  },
};

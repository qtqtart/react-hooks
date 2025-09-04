import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactDomPlugin from "eslint-plugin-react-dom";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactXPlugin from "eslint-plugin-react-x";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import storybookPlugin from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,ts,tsx}"],
    extends: [...tseslint.configs.recommended, js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.es2025,
        ...globals.browser,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      storybook: storybookPlugin,
      "react-x": reactXPlugin,
      "react-dom": reactDomPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      import: importPlugin,
    },
    rules: {
      ...reactXPlugin.configs.recommended.rules,
      ...reactDomPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactRefreshPlugin.configs.recommended.rules,
      //
      "no-var": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      //
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      //
      "react-x/no-array-index-key": "off",
      "react-x/jsx-key-before-spread": "off",
      //
      "react-dom/no-missing-button-type": "off",
      //
      "react-refresh/only-export-components": "off",
      //
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      //
      "import/no-duplicates": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  storybook.configs["flat/recommended"],
);

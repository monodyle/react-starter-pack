import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

// https://vite.dev/config/
export default defineConfig({
  fmt: {
    ignorePatterns: [],
  },
  lint: {
    plugins: [],
    categories: {},
    rules: {},
    settings: {
      "jsx-a11y": {
        polymorphicPropName: undefined,
        components: {},
        attributes: {},
      },
      next: {
        rootDir: [],
      },
      react: {
        formComponents: [],
        linkComponents: [],
        version: undefined,
        componentWrapperFunctions: [],
      },
      jsdoc: {
        ignorePrivate: false,
        ignoreInternal: false,
        ignoreReplacesDocs: true,
        overrideReplacesDocs: true,
        augmentsExtendsReplacesDocs: false,
        implementsReplacesDocs: false,
        exemptDestructuredRootsFromChecks: false,
        tagNamePreference: {},
      },
      vitest: {
        typecheck: false,
      },
    },
    env: {
      builtin: true,
    },
    globals: {},
    ignorePatterns: [],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});

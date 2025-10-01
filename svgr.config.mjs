import template from "./src/shared/assets/icons/svg-template.mjs";

export default {
  outDir: "src/shared/assets/icons/ui",
  filenameCase: "kebab",
  template,
  index: false,
  ignoreExisting: true,
  typescript: true,
  jsxRuntime: "automatic",
  prettier: true,
  replaceAttrValues: {
    black: "{color}",
    white: "{color}",
    "#000": "{color}",
    "#000000": "{color}",
    "#fff": "{color}",
    "#ffffff": "{color}",
    "#242424": "{color}",
    "#19191A": "{color}",
  },

  prettierConfig: {
    parser: "typescript",
    bracketSpacing: true,
    singleQuote: true,
    arrowParens: "avoid",
    printWidth: 120,
    bracketSameLine: false,
    trailingComma: "es5",
    endOfLine: "auto",
  },
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      "prefixIds",
    ],
  },
};

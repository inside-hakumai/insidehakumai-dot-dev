module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  env: {
    node: true, // "process", "__dirname"などのグローバル変数でエラーが出なくなる
    commonjs: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
      },
    ],
  },
};

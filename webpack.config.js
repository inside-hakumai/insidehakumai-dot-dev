const path = require("path");

const MODE = "development";
const isSourceMapEnabled = MODE === "development";

module.exports = {
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isSourceMapEnabled,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
};

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const MODE = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
    case "production":
      return process.env.NODE_ENV;
    default:
      throw new Error("Invalid NODE_ENV value: " + process.env.NODE_ENV);
  }
})();
const isSourceMapEnabled = MODE === "development";

module.exports = {
  mode: MODE,
  entry: "./src/main.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
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
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src", "index.html"),
          to: path.join(__dirname, "dist", "index.html"),
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
};

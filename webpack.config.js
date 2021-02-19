const path = require("path");
const webpack = require("webpack");
// if true env will be dev if not prod
const isDev = process.env.NODE_ENV === "development";

// env
const buildDirectory = "./public/";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(buildDirectory),
    filename: "bundle.[fullhash].js",
  },
  module: {
    rules: [
      // first rule
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // second rule
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localsConvention: "camelCase",
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

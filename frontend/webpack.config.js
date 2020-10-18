const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const buildPath = path.resolve(__dirname, "./build");
const assetsPath = path.resolve(__dirname, "./assets");

const getAssetsNames = (extension) => ({
  filename: isProduction
    ? `[name]-[contenthash].min.${extension}`
    : `[name].${extension}`,
  chunkFilename: isProduction
    ? `[name]-[contenthash].min.${extension}`
    : `[name].${extension}`,
});

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    path: buildPath,
    filename: "bundle.js",
    ...getAssetsNames("js"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /\/node_modules\//,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: isProduction,
      template: path.resolve("./src/template.html"),
      scriptLoading: "defer",
      favicon: path.resolve(assetsPath, "favicon.ico"),
      meta: {
        "og:title": "Хэлоу, это Снапи Воркер! 😎",
        "og:description": "Тот самый ботяра",
        "og:type": "website",
        "og:image": "http://snappy-worker.ru/preview.png",
      },
    }),
    new CopyPlugin({
      patterns: [{ from: assetsPath, to: buildPath }],
    }),
    new MiniCssExtractPlugin(getAssetsNames("css")),
  ],
  optimization: {
    minimize: isProduction,
    minimizer: [new CssMinimizerPlugin()],
  },
};

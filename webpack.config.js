const path = require("path");

// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-esm-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 8080,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js/,
        enforce: "pre",
        include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
        use: MonacoWebpackPlugin.loader,
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [new MonacoWebpackPlugin()],
};


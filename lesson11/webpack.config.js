const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "/"),
      },
    ],
    compress: true,
    port: 9000,
    devMiddleware: {
      publicPath: "/dist/", // URL from which webpack-dev-server serves the files
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/", // Public URL of the output directory when referenced in a browser
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};

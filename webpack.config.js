const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

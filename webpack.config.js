const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: { path: path.resolve(__dirname, "./src/index.js") },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    port: 8080,
    contentBase: "./dist",
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpeg|svg|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
};

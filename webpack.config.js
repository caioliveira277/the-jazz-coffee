const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src", "index.js"),
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve("src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "public/assets/css/styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/assets/images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  output: {
    filename: "public/assets/js/app.js",
    path: path.resolve(__dirname),
  },
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                jsx: true,
              },
            },
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};

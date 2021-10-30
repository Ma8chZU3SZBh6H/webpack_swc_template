module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
};

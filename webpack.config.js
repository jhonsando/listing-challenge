const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
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
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
      containers: path.resolve(__dirname, "./src/containers/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      services: path.resolve(__dirname, "./src/services/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

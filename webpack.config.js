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
      app: path.resolve(__dirname, "./src/app/"),
      components: path.resolve(__dirname, "./src/components/"),
      containers: path.resolve(__dirname, "./src/containers/"),
      models: path.resolve(__dirname, "./src/models/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      reducers: path.resolve(__dirname, "./src/reducers/"),
      services: path.resolve(__dirname, "./src/services/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

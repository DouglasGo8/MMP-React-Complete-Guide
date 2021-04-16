import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";
/**
 * @author dbatista
 */
module.exports = {
  entry: [
    "core-js/fn/promise",
    "core-js/es6/object",
    "core-js/es6/array",
    path.join(__dirname, "src", "index.js")
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    port: PORT,
    host: HOST
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ]
};

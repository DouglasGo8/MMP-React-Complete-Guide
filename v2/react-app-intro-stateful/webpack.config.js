const path = require("path");
//const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_DIRECTORY = path.join(__dirname, ".");
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, "src");

const config = {
  entry: [
    "core-js/fn/promise",
    "core-js/es6/object",
    "core-js/es6/array",
    path.resolve(__dirname, "./src/index.js"),
  ],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: [path.resolve("node_modules"), "node_modules"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, "./index.html"),
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(SRC_DIRECTORY, "./assets"),
        to: path.join(ROOT_DIRECTORY, "./build"),
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            {
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              //localIdentName: '[name]__[local]__[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                /*autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),*/
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"]
      },
    ],
  },
};

module.exports = config;

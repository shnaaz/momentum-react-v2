const autoprefixer = require('autoprefixer');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const { baseConfig } = require('./base.config');
const { repoRoot } = require('./constants');

baseConfig.resolve.alias['react-dom'] = '@hot-loader/react-dom';

baseConfig.module.rules.push({
  test: /(\.css|\.scss|\.sass)$/,
  use: [
    'style-loader',
    'css-loader?sourceMap',
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: 'inline',
        ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>.25%',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    'sass-loader?sourceMap',
  ],
});

exports.config = {
  ...baseConfig,

  devtool: 'eval-source-map', // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/

  entry: [
    // must be first entry to properly set public path
    './src/app/webpack-public-path',
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(repoRoot, 'src/app/index.js'), // Defining path seems necessary for this to work consistently on Windows machines.
  ],

  target: 'web',

  output: {
    path: path.resolve(repoRoot, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/app/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true, // set to false to see a list of every file being bundled.
    }),
    new MiniCssExtractPlugin('styles.css'),
  ],
};

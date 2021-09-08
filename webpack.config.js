const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // development, production, none
  mode: 'development',
  devtool: 'eval',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    // host: 'korello.app',
    historyApiFallback: true,
    inline: true,
    compress: true,
    overlay: true,
    hot: true,
    stats: 'errors-only',
  },
};

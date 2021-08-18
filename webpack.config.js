const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // development, production, none
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        loader: 'ts-loader',
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
  ],
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    compress: true,
    overlay: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'korello.app',
        changeOrigin: true,
      },
    },
  },
};

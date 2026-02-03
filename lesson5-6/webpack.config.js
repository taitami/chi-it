const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    clean: true,
  },

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
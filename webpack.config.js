const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.scss$/,
        rules: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe|jpg|png|svg|woff|woff2|eot|ttf|svg|ico|mp3)(\?.*$|$)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][hash].[ext]',
              context: ''
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 85
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '90'
              },
            }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', path.join(__dirname, 'src')],
    alias: {
      Assets: path.resolve(__dirname, 'src/assets')
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 7777,
    historyApiFallback: true
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};

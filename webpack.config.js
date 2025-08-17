const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/qwesui.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'qwesui.min.js',
    library: 'QwesUI',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'qwesui.min.css'
    })
  ],
  optimization: {
    minimize: true
  }
};

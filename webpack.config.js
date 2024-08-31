const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    //assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: '/',
      filename: 'index.html',
      template: path.resolve(__dirname, "public/index.html"),
    })
    ],
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  }
};
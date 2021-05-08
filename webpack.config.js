const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  // TODO 源码映射，但不起作用
  devtool: 'inline-source-map',
  // 文件修改时，自动刷新浏览器
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Development'})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,   // 每次构建前清空dist目录
  },
  module: {
    rules: [
      // 为css文件配置loader
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // 为图像文件配置loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // 为字体文件配置loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
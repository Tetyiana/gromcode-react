const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader']
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader',]
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],

}
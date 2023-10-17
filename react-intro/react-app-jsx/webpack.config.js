const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',

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
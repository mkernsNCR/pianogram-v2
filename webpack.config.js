var path = require('path');

module.exports = {
  mode:'development',
  entry: ['webpack-dev-server/client?http://127.0.0.1:4000', 'babel-polyfill', './src/index.js'],
  resolve: {
    extensions: [
      '.js', '.jsx', '.json'
    ],
    modules: ['node_modules'],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js' // this is the compiled final javascript file which we will include in the index.html
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ]
    },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }]
  },
  devtool: 'cheap-module-eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug
  devServer: {
    stats: {
      chunks: false,
      hash: false,
      version: false,
      modules: false,
      assets: false
    },
    disableHostCheck: true,
    host: '127.0.0.1',
    port: 4000,
    public: '127.0.0.1:4000',
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
  }
}
const path = require("path"); // rquiring not importing b/c because webpack is compiling es6

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, `src`, `app`),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true // necesarry for react router
  },
  module: { //how we want our app to be compiled
    rules: [{
        test: /\.jsx?/,
        loader: 'babel-loader'
    }]
  }
}
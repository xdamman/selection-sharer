var path = require('path');

module.exports = {
  entry: path.resolve(__dirname,"./index.js"),
  output: {
    filename: './demos/node/webpack/with-css/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

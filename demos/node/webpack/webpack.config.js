var path = require('path');

module.exports = {
  entry: path.resolve(__dirname,"./index.js"),
  output: {
    filename: './demos/node/webpack/bundle.js'
  }
}

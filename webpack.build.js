var config = require('./webpack.config.js')
var createVendorChunk = require('webpack-create-vendor-chunk');
config.entry = {
  everyone: './components/index.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'everyone',
  libraryTarget: 'umd',
}


module.exports = config

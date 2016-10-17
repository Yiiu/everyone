var config = require('./webpack.config.js')
var createVendorChunk = require('webpack-create-vendor-chunk');
config.entry = {
  everyone: './components/index.js',
  vendor: ['vue']
}

config.output = {
  filename: './dist/[name].js',
  library: 'everyOne',
  libraryTarget: 'umd',
}
config.plugins = [
  createVendorChunk({
    name: 'vue',
    chunks: ['vue'],
  }),
    createVendorChunk({
        name: 'everyone',
        chunks: ['everyone'],
    }),
]


module.exports = config

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')          // 单独打包cssvar
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path')
var pkg = require(path.join(__dirname, '../package.json'))

var config = require('./webpack.base.conf')          // 默认的打包设置

var SOURCE_MAP = false

config.devtool = SOURCE_MAP ? 'source-map' : false

function generateExtractLoaders (loaders) {
    return loaders.map(function (loader) {
        return loader + '-loader' + (SOURCE_MAP ? '?sourceMap' : '')
    }).join('!')
}

config.vue.loaders = {
    js: 'babel',
    css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
    less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
    sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
    stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus']))
}
config.plugins = (config.plugins || []).concat([
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.BannerPlugin(
`Everyone v${pkg.version} (https://yiiu.github.io/everyone)
Licensed under the ${pkg.license} license`
    , {
        entryOnly: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        drop_console: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('everyone.css'),
])
module.exports = config

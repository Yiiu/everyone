var ExtractTextPlugin = require("extract-text-webpack-plugin");
var VendorChunkPlugin = require('webpack-create-vendor-chunk');
var webpack = require('webpack')
var path = require('path')

var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')


module.exports = {
    entry: {
        index: './components/index.js',
        vue: ["vue"]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
         filename: '[name].js',
        library: 'everyone',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue': 'vue/dist/vue.common.js',
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../components'),
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader!autoprefixer'
            },
            {
                test: /\.md/,
                loader: 'vue-markdown-loader'
            }
        ]
    },
    vue: {
        loaders: utils.cssLoaders(),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            drop_console: true,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("styles.css"),
        new VendorChunkPlugin('vue'),
    ]
}

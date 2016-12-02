var path = require('path')

var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')


module.exports = {
    devtool: 'source-map',
    entry: {
        everyone:'./components/index.js'
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
            'components': path.resolve(__dirname, '../components/components'),
            'style': path.resolve(__dirname, '../components/style')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
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
                    name: '[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader!autoprefixer'
            }
        ]
    },
    vue: {
        loaders: {
          js: 'babel'
        }
    },
}

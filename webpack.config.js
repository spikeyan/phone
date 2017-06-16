/**
 * webpack config
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: {
        final:'./dev/index.js',
        lib:['jquery','d3']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'www'),
        chunkFilename:'js/[name].js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: "babel-loader" },
            {
                test:/\.styl$/,
                loader:ExtractTextPlugin.extract({
                    use:'css-loader?minimize!stylus-loader'
                })
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('final.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:"lib"
        }),
        new UglifyJSPlugin(),
    ]
};
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../example'),
    entry: {
        example: './example.js',
        picker: './picker.js'
    },
    output: {
        path: path.join(__dirname, '../dist/example'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html?minimize'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1&localIdentName=[local]!postcss!less'
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                loader: 'style!css!postcss'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: '"dev"',
            'process.env.NODE_ENV': '"dev"'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../example/index.html')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../example/picker.html'),
            filename: 'picker.html',
            inject: true,
            chunks: ['picker']
        }),
        new OpenBrowserPlugin({url: 'http://localhost:8001'})
    ]
};

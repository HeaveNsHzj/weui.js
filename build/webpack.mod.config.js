const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin('../dist/[name].css');

module.exports = function (entry, isMinify) {
    const plugins = [
        new webpack.DefinePlugin({
            NODE_ENV: '"production"',
            'process.env.NODE_ENV': '"production"'
        }),
        extractLess,
        new webpack.BannerPlugin([
            pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
            'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
            pkg.license + ' license'
        ].join('\n'))
    ];
    if(isMinify){
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }));
    }

    return {
        context: path.join(__dirname, '../src'),
        entry: entry,
        output: {
            path: path.join(__dirname, '../dist'),
            filename: isMinify ? '[name].min.js' : '[name].js',
            library: 'weui',
            libraryTarget: 'umd',
            umdNameDefine: true
        },
        module: {
            loaders: [
                {
                    test: /\.js?$/,
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
                    loader: extractLess.extract([
                        'css',
                        'less'
                    ])
                    // loader: 'style!css?modules&importLoaders=1&localIdentName=[local]!postcss!less'
                },
                {
                    test: /\.css$/,
                    // exclude: /node_modules/,
                    loader: 'style!css!postcss'
                }
            ]
        },
        plugins: plugins
    };
};

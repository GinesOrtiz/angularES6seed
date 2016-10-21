var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var modRewrite = require('connect-modrewrite');

// Path Config
var pathConfig = {
    context: path.join(__dirname, 'src'),
    distPath: path.join(__dirname, 'www'),
    assetsPath: path.join(__dirname, 'www/assets')
};

// varPlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var varPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __API_URL__: JSON.stringify(process.env.API_URL || 'http://localhost:3000'),
    __VERSION__: JSON.stringify(require('./package.json').version)
});

var config = {
    context: pathConfig.context,
    entry: './index.js',
    devtool: 'source-map',
    output: {
        publicPath: '/',
        path: pathConfig.context,
        filename: 'bundle-[hash:6].js'
    },

    plugins: [
        new ExtractTextPlugin('styles-[hash:6].css'),
        varPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: 'index.html'
        }),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 8080,
                proxy: 'http://localhost:8080/',
                middleware: [
                    modRewrite([
                        '!\\.\\w+$ /index.html [L]'
                    ])
                ]

            },
            {
                reload: false
            }
        )
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel',
                exclude: /node_modules/
            },
            {
                test: /\.(json)$/,
                loader: 'raw',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw!html-minifier',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader?sourceMap', 'css?sourceMap')
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=/res/[name].[ext]?[hash]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src')]
    },
    'html-minifier-loader': {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: false
    }
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = null;
    config.output.path = pathConfig.distPath;
    config.output.publicPath = '/';
    config.plugins = [
        varPlugin,
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('styles-[hash:6].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            pkg: pkg,
            template: 'index.html',
            minify: {
                collapseInlineTagWhitespace: true,
                conservativeCollapse: true,
                removeComments: true
            }
        })
    ];
}

module.exports = config;

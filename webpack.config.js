var webpack = require('webpack');
var path = require('path');
var pkg = require('./package.json');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var modRewrite = require('connect-modrewrite');
var VersionFile = require('webpack-version-file-plugin');

// Path Config
var pathConfig = {
    context: path.join(__dirname, 'client'),
    distPath: path.join(__dirname, 'dist'),
    assetsPath: path.join(__dirname, 'dist/assets')
};

// varPlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var varPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __API_URL__: JSON.stringify(process.env.API_URL || 'http://localhost:3000'),
    __VERSION__: JSON.stringify(require("./package.json").version)
});

var config = {
    context: pathConfig.context,
    entry: './index.js',
    //devtool: 'source-map',
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
                loader: 'jshint-loader!ng-annotate!babel',
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
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    'html-minifier-loader': {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        preserveLineBreaks: false
    },
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        camelcase: true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        // custom reporter function
        reporter: function (errors) {
        }
    }
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = pathConfig.distPath;
    config.output.publicPath = '/';
    config.plugins = [
        varPlugin,
        new webpack.optimize.DedupePlugin(),
        new VersionFile({
            packageFile: path.join(__dirname, 'package.json'),
            templateString: "<%= package.version %>",
            outputFile: path.join(pathConfig.distPath, 'version.txt')
        }),
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

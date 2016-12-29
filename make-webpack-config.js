var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules   = path.resolve(__dirname, 'node_modules');

function makeConfig(isProd, buildDocs) {
    var plugins = [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
    ];

    var entry = [
        './src'
    ];

    var publicPath = '/dist/';

    var babelPresets = [
        "es2015",
        "stage-0",
        "react"];

    var devtool = 'eval';

    var fileName = 'flexable';

    if(isProd){
        plugins = plugins.concat(
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                },
                sourceMap: false
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        );

        fileName += '.min';
    } else {
        plugins = plugins.concat(
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("development"),
                    BROWSER: JSON.stringify(true)
                }
            })
        );

        devtool = 'inline-source-map';
    }

    var config = {
        entry: entry,
        node: {
            fs: "empty"
        },
        externals: [{
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            }
        }],
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                path.resolve('./src'),
                'node_modules'
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: fileName + '.js',
            publicPath: publicPath
        },
        module: {
            loaders: [
                {
                    loader: "babel-loader",

                    // Skip any files outside of your project's `src` directory
                    include: [
                        path.resolve(__dirname, "src"),
                    ],

                    // Only run `.js` and `.jsx` files through Babel
                    test: /\.jsx?$/,

                    // Options to configure babel with
                    query: {
                        plugins: ['transform-runtime'], // todo this means the babel-runtime is required by anyone using
                        // this code (may want to create separate build for those not using babel)
                        presets: babelPresets,
                    }
                },
                {
                    // todo: package compiled css externally from control
                    test: /\.scss/,
                    // loaders: styleLoaders
                    loader: ExtractTextPlugin.extract( { fallbackLoader: "style-loader", loader: "css-loader!sass" })
                }
                /*{
                     test: /\.jsx?$/,
                     loader: 'eslint',
                     exclude: /node_modules/
                 }*/
            ]
        },
        plugins: plugins
    };

    if (!isProd) {
        config.devtool = devtool;
    }

    return config;

}

module.exports = makeConfig;

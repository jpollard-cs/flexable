var path = require('path');
var webpack = require('webpack');

function makeConfig(isProd) {
    var plugins = [
        new webpack.NoErrorsPlugin()
    ];

    var entry = [
        './src'
    ];

    var publicPath = '/dist/';

    var babelPresets = [
        "es2015-webpack",
        // "es2015",
        "stage-0", 
        "react"];

    var styleLoaders = ['style'];

    var devtool = 'eval';

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

        styleLoaders = styleLoaders.concat('css', 'sass');
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
        styleLoaders = styleLoaders.concat('css?sourceMap', 'sass?sourceMap');
    }

    var config = {
        entry: entry,
        node: {
            fs: "empty"
        },
        resolve: {
            extensions: ['', '.js', '.jsx'],
            modules: [
                path.resolve('./src'),
                'node_modules'
            ]
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
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
                        plugins: ['transform-runtime'],
                        presets: babelPresets,
                    }
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src/css'),
                    loaders: styleLoaders
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
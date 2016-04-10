var path = require('path');
var webpack = require('webpack');
var SaveAssetsJson = require('assets-webpack-plugin');

function makeConfig(isProd) {
    var plugins = [
        new webpack.NoErrorsPlugin(),
        new SaveAssetsJson({
            path: path.resolve('./static/')
        })
    ];

    var entry = [
        './client/index.jsx'
    ];

    var publicPath = '/static/';

    var babelPresets = [];

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
            // new webpack.optimize.UglifyJsPlugin(),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            })
        );

        styleLoaders = styleLoaders.concat('css', 'sass');
    } else {
        plugins = plugins.concat(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("development"),
                    BROWSER: JSON.stringify(true)
                }
            })
        );
        entry.unshift('webpack-hot-middleware/client');
        babelPresets.push('react-hmre');
        devtool = 'inline-source-map';
        styleLoaders = styleLoaders.concat('css?sourceMap', 'sass?sourceMap');
    }

    var config = {
        entry: entry,
        output: {
            path: path.join(__dirname, 'static'),
            filename: isProd ? '[name].[hash].js' : '[name].js',
            publicPath: '/static/'
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    include: __dirname,
                    query: {
                        presets: babelPresets
                    }
                },
                {
                    test: /\.scss$/,
                    loaders: styleLoaders
                }
                /*{
                     test: /\.jsx?$/,
                     loader: 'eslint',
                     exclude: /node_modules/
                 }*/
            ]
        },
        devtool: devtool,
        plugins: plugins
    };

    return config;

}

module.exports = makeConfig;
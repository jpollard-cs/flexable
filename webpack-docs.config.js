var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function makeDocsConfig() {
    var plugins = [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
                BROWSER: JSON.stringify(true)
            }
        }),
        new ExtractTextPlugin({ filename: './example/dist/css/styles.css' })
    ];

    var entry = [
        './example/src'
    ];

    var publicPath = '/example/dist';

    var babelPresets = [
        "es2015",
        "stage-0",
        "react"];

    devtool = 'inline-source-map';

    var config = {
        entry: entry,
        node: {
            fs: "empty"
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                path.resolve('./example/src'),
                path.resolve(__dirname, "node_modules")
            ]
        },
        output: {
            path: path.join(__dirname, 'example/dist'),
            filename: 'app.js',
            publicPath: publicPath
        },
        module: {
            loaders: [
                {
                    loader: "babel-loader",

                    // Skip any files outside of your project's `src` directory
                    include: [
                        path.resolve(__dirname, "example/src"),
                        path.resolve(__dirname, "src") //todo: only use this when importing source directly - remove once using distributable for examples
                    ],

                    // Only run `.js` and `.jsx` files through Babel
                    test: /\.jsx?$/,

                    // Options to configure babel with
                    query: {
                        presets: babelPresets,
                    }
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src/css'), // TODO: change back to example/src/css once using distributable
                    loader: ExtractTextPlugin.extract( { fallbackLoader: "style-loader", loader: "css-loader!sass" })
                },
            ]
        },
        plugins: plugins,
        devtool: devtool
    };

    return config;

}

module.exports = makeDocsConfig();

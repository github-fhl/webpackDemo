const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        foo: './src/scripts/foo.js',
        bar: './src/scripts/bar.js',
    },
    output: {
        filename: '[name].js',
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader',
            }),
        }],
    },
    plugins: [new ExtractTextPlugin('[name].css')],
};
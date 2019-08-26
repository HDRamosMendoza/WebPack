const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/app.js',
    output: {
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        port: 5000
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
          },
        ],
    },
}
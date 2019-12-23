const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*plugin: 
- new HtmlPlugin. Copia el archivo src/index.html a build
- devServer. Te prepara un servidor y se muestra por el puerto 5000.
*/



module.exports = {
    entry:'./src/app.js',
    output: {
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ],
          },
        ],
    },
    
    devServer: {
        port: 5000
    },

    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
}
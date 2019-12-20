# WebPack 4
Es un empaquetador de módulos de FRONTEND. No lo en DESARROLLO sino en PRODUCCIÓN.
Establecer un entorno de desarrollo.

Ejemplo guía de FAZT.
https://www.youtube.com/watch?v=vF2emKbaP4M

> Para crear una package JSON
    npm init --yes

> Instalación global
    npm i webpack -g

> Instalación local
    npm i webpack

> Instalar webpack cli. Complemento de webpack
    npm i webpack-cli

Para convertir
webpack app.js -o output.js

- Se indica que tome el archivo "app.js" y que genere un nuevo archivo "output"
npx webpack app.js -o output.js

- __dirname. Constante de NODE. Es la direccion de muestro en el sistema operativo.

- Se debe de tener configurado el webpack.config.js

> Indicamos código en producción
    npx webpack -p

> Indicamos código en desarrollo
    npx webpack -d

- Plugins. Espara personalizar o customizar en el proceso de construccion. Funciona al momento de procesar y generar una salida.

- Para HTML
    https://github.com/jantimon/html-webpack-plugin
    npm i --save-dev html-webpack-plugin

- Webpack server
    https://github.com/webpack/webpack-dev-server
    npm install webpack-dev-server --save-dev

- Ejecutamos. Se crear un servidor con el puerto 8080. Tener en cuenta si activo IIS
    npx webpack-dev-server
    localhost:8080

- Para cambiar de puerto es con devServer. Para salir de la consola es CTRL + C

- Loader. Funcionan al momento de procesar en desarrollo.
    https://github.com/webpack-contrib/style-loader
    npm install --save-dev style-loader
    npm install --save-dev css-loader

    use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
    ],

- Procesar SASS
    https://github.com/webpack-contrib/sass-loader
    npm install sass-loader node-sass

    Compilador y transpilador

    use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {loader: 'sass-loader'}
    ],

- JQUERY. Instalando jquery
    https://www.npmjs.com/package/jquery

- UUID. Te genera ID aleatorios.
    npm i uuid
    https://www.npmjs.com/package/uuid

- mini css extract plugin. Usamos este plugin con intension
    de sacar el css del js para mostrar. Solo por motivo
    academicos. Si agregamos este plugin .. los css se estan integrando con el js.

    npm install --save-dev mini-css-extract-plugin
    https://github.com/webpack-contrib/mini-css-extract-plugin

    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ],

    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],

npx webpack-dev-server
# WebPack 4
Ejemplo guía de FAZT.
https://www.youtube.com/watch?v=vF2emKbaP4M

> Instalación local
    npm i webpack

> Instalar webpack cli
    npm i webpack-cli

Para convertir
webpack app.js -o output.js

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


npx webpack-dev-server
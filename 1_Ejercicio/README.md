# WebPack
Example
* Create package.json (default): npm init -y
    - Create default.
    
* Install WebPack: npm i -D webpack webpack-dev-server babel-loader babel-cli babel-preset-es2015
    - -D => --save-dev.
    - i => install.
    - -g => general.
    - webpack => Para tener funcionando webpack.
    - webpack-dev-server => Para crear un servidor de desarrollo rapidamente en el archivo de configuracion.
    - babel-loader => Son cargadores. Dependiendo el tipo de archivo que estemos utilizando cargarlo y realizar las transformaciones necesarias.
    - babel-cli => es el core  de babel.

---------------------------------------------------------------------------

1. Creamos un archivo llamado webpack.config.js

2. Agregamos las siguientes lineas al archivo package.json
    -   "script": {
            "build": "webpack --watch --colors", 
            "start": "webpack-dev-server --progress --colors"
        }

        > webpack: Llama a webpack.
        > --watch: Espera los cambios.
        > --colors: Cambiar los colores en la terminal.
        > --progress: Nuestra nuestro progreso.

        Nota: Esto nos permite compilar o empaquetizar nuestra aplicación todo nuestro código y que tome todo lo que hemos puesto en nuestro código.
    => Lo ejecutamos en la consola: npm run build

3. Creamos nuestro archivo "build" de salida. Dentro creamos un index.html

4. Creamos nuestro archivo "src" dentro creamos index.js

5. En "src" creamos persona.js

6. npm run build

7. npm start

8. 0.0.0.0:8080/build/
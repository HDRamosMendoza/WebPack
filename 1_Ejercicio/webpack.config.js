module.exports = {
	entry: {
		app: './src/index.js'
    },
    context: __dirname,
	output: {
		path: './build',
		filename: 'bundle.js',
		publicPath: '/build/'
    },
	resolve: {
		extensions: ['', '.js','.jsx']
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		inline: true
    },
	module: {
		loaders: [
			{
				test: /(\.js|.jsx)$/,
				loader: 'babel',
				exclude: '/node_modules/',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
 }
 
 /* 
	Nos crea un servidor que este creado
	en NODE EXPRESS "inline: true "
*/
/*
	expresion regular que nos
	tomen en cuenta todos los 
	archivos js
*/ 
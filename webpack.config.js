const path = require('path');	//宣告常數 path為
const webpack = require('webpack');

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
		publicPath: '/dist/'
    },
	mode:'none',
	module: {
		loaders: [
		  {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		  }
		]
	},
	resolve: {
        alias: {
            jquery: "jquery/dist/jquery.js",
			vue: "vue/dist/vue.js"
			
        },
		extensions: ['.js', '.vue', '.json']
    }
};


//載入path
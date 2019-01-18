const path = require('path');	//宣告常數 path為
const webpack = require('webpack');

module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
	module: {
        rules: [
            {
                test: '/.msg.vue',
                loader: 'vue-loader'
            }
        ]
    },
	resolve: {
        alias: {
			'vue': "vue/dist/vue.js"
			
        },
		extensions: ['.js', '.vue']
    }
};


//載入path
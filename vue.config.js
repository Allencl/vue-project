const path = require('path');

module.exports = {
    publicPath:"./",
    devServer: {
        disableHostCheck: true,
            proxy: {
                '': {
                    // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/d
                    target: 'http://http://182.168.1.221:8080/',

                    // 允许跨域
                    changeOrigin: true,
                    ws: true,
                    pathRewrite: {
                        '^/': '/'
                    }
                },
            }
    },
      configureWebpack:{
        performance: {
		    hints:false
	    },
        resolve:{
            alias:{
                '@styles':path.resolve('./src/styles'),
                '@src':path.resolve('./src'),
                '@assets':path.resolve('./src/assets'),
                '@view':path.resolve('./view'),
            }
        }
    }
};
const pages = require('./pages.config')
const path = require('path')
var webpack=require("webpack")

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
        path.resolve(__dirname, './src/style/init.styl'), //css初始化
        path.resolve(__dirname, './src/style/common.styl'),//全局css
			],
		})
}

module.exports = {
	baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
	pages,
	//webpack配置
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				jQuery: "jquery",
				$: "jquery"
			})
		]
	},
	chainWebpack: config => {
		//全局stylus css变量配置
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
	},
  lintOnSave:false,
	devServer: {
		port: 8020,
		host: 'localhost',
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器
		openPage: 'index.html',
		proxy: {// 配置多个代理
      '/api':{
        target:'http://www.t.kebilin.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'http://www.t.kebilin.cn'
        }
      }
		}
	},
	// 打包时不生成.map文件
	productionSourceMap: false,
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'components': '@/components',
				'views': '@/views',
        'hero':'@/hero'
			}
		}
	},
}


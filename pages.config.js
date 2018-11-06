const fs = require('fs')
let pages = {}

 //设置页面对应标题名
let title = {
  index:'首页'
}

fs.readdirSync('./src/views').forEach(page=> {
	pages[page] = {
        entry: `src/views/${page}/index.js`,
        title: title[page]?title[page]:'',
        template: 'public/index.html',
        filename: `${page}.html`,
        chunks: ['chunk-vendors', 'chunk-common', page]
    }
})

module.exports = pages


